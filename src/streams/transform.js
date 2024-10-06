import { Transform } from "stream";
import { pipeline } from "stream/promises";
import { stdin, stdout } from "process";

const reverse = new Transform({
  transform(chunk, encoding, callback) {
    const reversedData = chunk.toString().split("").reverse().join("");
    callback(null, reversedData);
  },
});

const transform = async () => {
  try {
    await pipeline(stdin, reverse, stdout);
  } catch (error) {
    console.error("Failed: ", error);
  }
};

await transform();
