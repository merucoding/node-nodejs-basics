import fs from "fs/promises";

const copy = async () => {
  try {
    await fs.access("src/fs/files");
  } catch {
    throw new Error("FS operation failed: folder Files does not exists");
  }

  try {
    await fs.mkdir("src/fs/files_copy");
  } catch {
    throw new Error("FS operation failed: folder Files_copy already exists");
  }

  await fs.cp("src/fs/files", "src/fs/files_copy", { recursive: true });
};

await copy();
