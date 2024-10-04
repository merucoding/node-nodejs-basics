import fs from "fs/promises";

const create = async () => {
  const access = await fs.access("src/fs/files/fresh.txt")
  .then(() => true)
  .catch(() => false);

  if (!access) {
    await fs.writeFile("src/fs/files/fresh.txt", "I am fresh and young");
  } else {
    throw new Error("FS operation failed");
  }
};

await create();
