import { Worker } from "worker_threads";
import os from "os";

const performCalculations = async () => {
  const systemCPU = os.cpus().length; // 8
  const res = [];
  let count = 0;

  for (let i = 0; i < systemCPU; i++) {
    const worker = new Worker("./src/wt/worker.js");
    worker.postMessage(10 + i);

    worker.on("message", (result) => {
      res[i] = { status: "resolved", data: result };
      count++;

      if (count === systemCPU) {
        console.log(res);
      }
    });

    worker.on("error", () => {
      res[i] = { status: "error", data: null };
      count++;

      if (count === systemCPU) {
        console.log(res);
      }
    });
  }
};

await performCalculations();

// 55-89-144-233-377-610-987-1597

// [
//   { status: 'resolved', data: 55 },
//   { status: 'resolved', data: 89 },
//   { status: 'resolved', data: 144 },
//   { status: 'resolved', data: 233 },
//   { status: 'resolved', data: 377 },
//   { status: 'resolved', data: 610 },
//   { status: 'resolved', data: 987 },
//   { status: 'resolved', data: 1597 }
// ]
