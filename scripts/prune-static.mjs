import { readdir, readFile, stat, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';

const outputDirectory = path.resolve('out');

if (path.basename(outputDirectory) !== 'out') {
  throw new Error('Refusing to prune anything except the static out directory.');
}

async function filesWithin(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? filesWithin(entryPath) : [entryPath];
  }));
  return nested.flat();
}

const files = await filesWithin(outputDirectory);

for (const file of files.filter((candidate) => candidate.endsWith('.html'))) {
  const html = await readFile(file, 'utf8');
  const withoutRuntimeScripts = html
    .replace(/<link\b(?=[^>]*\brel="preload")(?=[^>]*\bas="script")[^>]*>/gi, '')
    .replace(/<script\b([^>]*)>[\s\S]*?<\/script>/gi, (script, attributes) =>
      /type="application\/ld\+json"/i.test(attributes) ? script : '',
    );
  await writeFile(file, withoutRuntimeScripts);
}

for (const file of files) {
  const relativePath = path.relative(outputDirectory, file);
  const isRuntimeScript = relativePath.startsWith(`_next${path.sep}`) && file.endsWith('.js');
  const isReactPayload = file.endsWith('.txt') && path.basename(file) !== 'robots.txt';
  if (isRuntimeScript || isReactPayload) await unlink(file);
}

const remaining = await filesWithin(outputDirectory);
const totalBytes = (await Promise.all(remaining.map(async (file) => (await stat(file)).size)))
  .reduce((sum, size) => sum + size, 0);

console.log(`Static export pruned: ${remaining.length} files, ${(totalBytes / 1024).toFixed(1)} KiB, no client runtime.`);
