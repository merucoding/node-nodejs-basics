import fs from "fs/promises";

const remove = async () => {
  try {
    await fs.access("src/fs/files/fileToRemove.txt");
  } catch {
    throw new Error("FS operation failed: file does not exists");
  }

  await fs.rm("src/fs/files/fileToRemove.txt");
};

await remove();