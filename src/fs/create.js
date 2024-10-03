import fs from 'fs';

const create = async () => {
  if (!fs.existsSync("./files/fresh.txt")) {
    fs.writeFile("./files/fresh.txt", "I am fresh and young", (err) => {
      if (err) {
        throw new Error ("FS operation failed");
      }
    });
  } else {
    throw new Error("FS operation failed");
  }
};

await create();
