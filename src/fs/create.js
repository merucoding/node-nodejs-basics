import fs from "fs/promises";

const create = async () => {
  const access = await fs.access("./files/fresh.txt")
  .then(() => true)
  .catch(() => false);

  if (!access) {
    await fs.writeFile("./files/fresh.txt", "I am fresh and young");
  } else {
    throw new Error("FS operation failed");
  }
};

await create();
