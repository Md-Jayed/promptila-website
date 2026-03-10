import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// This file is a wrapper to run the TypeScript server on Hostinger
// Set this as your "Startup file" in the Hostinger Node.js panel

console.log('Starting Promptila Express Server...');

const npx = process.platform === 'win32' ? 'npx.cmd' : 'npx';

const child = spawn(npx, ['tsx', 'server.ts'], {
  stdio: 'inherit',
  env: { ...process.env, NODE_ENV: 'production' }
});

child.on('error', (err) => {
  console.error('Failed to start server:', err);
});

child.on('exit', (code) => {
  console.log(`Server process exited with code ${code}`);
});
