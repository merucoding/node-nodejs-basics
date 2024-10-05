import fs from "fs";
import { stdin } from "process";

const write = async () => {
  const ws = fs.createWriteStream("src/streams/files/fileToWrite.txt");

  stdin.on("data", (data) => {
    ws.write(data);
  });

  stdin.on("end", () => { // ctrl + D
    ws.end();
    console.log("Запись завершена");
  });
};

await write();
