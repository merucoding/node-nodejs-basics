import fs from "fs/promises";

const list = async () => {
  try {
    await fs.access("src/fs/files");
  } catch {
    throw new Error("FS operation failed: folder Files does not exists");
  }

  const files = await fs.readdir("src/fs/files");
  console.log(files);
};

await list();

// ТЗ поняла как вывести "массив с именами всех файлов в files", надеюсь правильно поняла... 