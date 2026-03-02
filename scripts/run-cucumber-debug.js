const { spawn } = require('child_process');

const args = [
  '--require-module', 'ts-node/register',
  '--require', 'src/hooks/**/*.ts',
  '--require', 'src/steps/**/*.ts',
  '--format', 'progress',
  '--format', 'json:reports/cucumber-report.json',
  '--parallel', '0'
];

console.log('Running: npx cucumber-js', args.join(' '));

const proc = spawn('npx', ['cucumber-js', ...args], { stdio: 'inherit', shell: true, env: process.env });

proc.on('close', (code) => {
  console.log(`cucumber-js exited with code ${code}`);
  process.exit(code);
});
