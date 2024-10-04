import fs from "fs/promises";

const rename = async () => {
  const access = await fs.access("src/fs/files/properFilename.md")
  .then(() => true)
  .catch(() => false);

  if (!access) {
    try {
      await fs.access("src/fs/files/wrongFilename.txt");
    } catch {
      throw new Error("FS operation failed: wrongFilename.txt does not exists");
    }

    await fs.rename('src/fs/files/wrongFilename.txt', 'src/fs/files/properFilename.md');
  } else {
    throw new Error("FS operation failed: properFilename.md already exists");
  }
};

await rename();