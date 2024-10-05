import fs from "fs";
import { stdout } from "process";

const read = async () => {
  const rs = fs.createReadStream('src/streams/files/fileToRead.txt', { encoding: 'utf8' });

  rs.on('data', (chunk) => {
    stdout.write(chunk + '\n');
  })
};

await read();
