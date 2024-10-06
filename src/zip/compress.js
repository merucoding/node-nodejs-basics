import fs from "fs";
import zlib from "zlib";
import { pipeline } from "stream/promises";

const compress = async () => {
  const rs = fs.createReadStream("src/zip/files/fileToCompress.txt");
  const ws = fs.createWriteStream("src/zip/files/archive.gz")
  const compressStream = zlib.createGzip();

  try {
    await pipeline(rs, compressStream, ws)
  } catch (error) {
    console.error('Failed: ', error);
  }
};

await compress();