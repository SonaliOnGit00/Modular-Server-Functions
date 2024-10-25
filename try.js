const fs = require("fs").promises;

async function writeToFile() {
  try {
    await fs.writeFile("sample.txt", "Hello world! ");
    console.log("File saved!");
  } catch (err) {
    console.error(err);
  }
}

writeToFile();