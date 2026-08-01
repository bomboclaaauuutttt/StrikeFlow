import { copyFileSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { basename, join } from 'node:path';

const webDir = 'www';
const files = [
  'index.html',
  'sw.js',
  'manifest.json',
  'privacy-policy.html',
  'icon-192.png',
  'icon-512.png',
  'StrikeFlow logo.png',
  'Strike Flow.png',
  'click soundeffect.mp3'
];

rmSync(webDir, { recursive: true, force: true });
mkdirSync(webDir, { recursive: true });

for (const file of files) {
  if (!existsSync(file)) {
    throw new Error(`Missing required web asset: ${file}`);
  }
  copyFileSync(file, join(webDir, basename(file)));
}

console.log(`Prepared ${files.length} web assets in ${webDir}/`);
