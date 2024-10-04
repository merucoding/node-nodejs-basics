import fs from "fs/promises";

const remove = async () => {
  try {
    await fs.access("./files/fileToRemove.txt");
  } catch {
    throw new Error("FS operation failed: file does not exists");
  }

  await fs.rm("./files/fileToRemove.txt");
};

await remove();