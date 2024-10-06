import fs from "fs";
import zlib from "zlib";
import { pipeline } from "stream/promises";

const decompress = async () => {
  const access = await fs.promises
    .access("src/zip/files/archive.gz")
    .then(() => true)
    .catch(() => false);

  if (access) {
    const rs = fs.createReadStream("src/zip/files/archive.gz");
    const ws = fs.createWriteStream("src/zip/files/fileToCompress.txt");
    const decompressStream = zlib.createGunzip();

    await pipeline(rs, decompressStream, ws);
  } else {
    throw new Error("Please compress first!");
  }
};

await decompress();
