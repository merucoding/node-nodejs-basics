import fs from "fs/promises";

const copy = async () => {
  try {
    await fs.access("./files");
  } catch {
    throw new Error("FS operation failed: folder Files does not exists");
  }

  try {
    await fs.mkdir("./files_copy");
  } catch {
    throw new Error("FS operation failed: folder Files_copy already exists");
  }

  await fs.cp("./files", "./files_copy", { recursive: true });
};

await copy();
