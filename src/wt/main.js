import { Worker } from "worker_threads";

const performCalculations = async (n) => {
  const worker = new Worker("./src/wt/worker.js");
  worker.postMessage(n);

  worker.on("message", (result) => {
    console.log("Result:", result);
  });
};

await performCalculations(9);
