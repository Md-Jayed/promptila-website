import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// This file is the entry point for Hostinger
// It runs the compiled production server

const productionServer = path.join(__dirname, 'dist-server', 'index.js');

console.log('Starting Promptila Production Server...');

if (fs.existsSync(productionServer)) {
  console.log('Found compiled server, starting...');
  import('./dist-server/index.js').catch(err => {
    console.error('Failed to start production server:', err);
    process.exit(1);
  });
} else {
  console.error('Compiled server NOT found at:', productionServer);
  console.error('Please run "npm run build" in your Hostinger terminal first.');
  
  // Fallback for development/testing if tsx is available
  console.log('Attempting fallback to tsx...');
  import('child_process').then(({ spawn }) => {
    const npx = process.platform === 'win32' ? 'npx.cmd' : 'npx';
    const child = spawn(npx, ['tsx', 'server.ts'], {
      stdio: 'inherit',
      env: { ...process.env, NODE_ENV: 'production' }
    });
    
    child.on('error', (err) => {
      console.error('Fallback failed:', err);
      process.exit(1);
    });
  });
}
