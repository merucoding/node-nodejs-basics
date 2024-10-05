import { Transform } from "stream";

const reverse = new Transform({
  transform(chunk, encoding, callback) {
    const reversedData = chunk.toString().split("").reverse().join("");
    callback(null, reversedData);
  },
});

const transform = () => {
  process.stdin.pipe(reverse).pipe(process.stdout);
};

transform();