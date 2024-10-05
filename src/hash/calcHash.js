import fs from "fs";
import crypto from "crypto";
import { pipeline } from "stream/promises";

const calculateHash = async () => {
  const hash = crypto.createHash("sha256");
  const rs = fs.createReadStream("src/hash/files/fileToCalculateHashFor.txt");

  await pipeline(rs, hash.setEncoding("hex"));
  console.log(hash.read());
};

await calculateHash();
