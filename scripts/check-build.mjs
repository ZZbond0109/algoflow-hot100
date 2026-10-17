import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import path from 'node:path';

// Project Pages serves from /repository-name/, so /assets/... would break.
const outputDirectory = path.resolve('dist');
const html = await readFile(path.join(outputDirectory, 'index.html'), 'utf8');
const assets = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
  .map(match => match[1])
  .filter(url => !/^(?:https?:|data:|#)/.test(url));
assert(assets.length >= 3, 'Expected JavaScript, CSS, and favicon references.');
for (const asset of assets) {
  assert(!asset.startsWith('/'), `Root-relative asset breaks GitHub project Pages: ${asset}`);
  const resolved = path.resolve(outputDirectory, asset.split(/[?#]/)[0]);
  assert(resolved.startsWith(outputDirectory + path.sep), `Asset escapes build directory: ${asset}`);
  await access(resolved);
}
console.log(`Verified ${assets.length} relative assets: compatible with GitHub project Pages.`);
