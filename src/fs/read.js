import fs from "fs/promises";

const read = async () => {
  try {
    await fs.access("src/fs/files/fileToRead.txt");
  } catch {
    throw new Error("FS operation failed: file does not exists");
  }

  const data = await fs.readFile("src/fs/files/fileToRead.txt", { encoding: 'utf8' });
  console.log(data);
};

await read();
