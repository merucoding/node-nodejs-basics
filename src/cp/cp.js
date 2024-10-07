import { spawn } from "child_process";

const spawnChildProcess = async (args) => {
  const child = spawn("node", ["./src/cp/files/script.js", ...args]);

  process.stdin.pipe(child.stdin);

  child.stdout.pipe(process.stdout);
  child.stderr.pipe(process.stderr);

  child.on('close', (code) => {
    console.log(`Child process exited with code ${code}`);
});
};

spawnChildProcess(["a", "b"]);

