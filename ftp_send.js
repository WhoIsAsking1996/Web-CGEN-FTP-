const ftp = require("basic-ftp");
const fs = require("fs");

async function sendFile() {
  const client = new ftp.Client();
  client.ftp.verbose = true;

  try {
    await client.access({
      host: "ftp.example.com",
      user: "your-username",
      password: "your-password",
      secure: false,
    });

    const fileContents = await fs.promises.readFile("path/to/your/file.txt");
    await client.uploadFrom(fileContents, "file.txt");

    console.log("File uploaded successfully!");
  } catch (err) {
    console.error(err);
  }

  client.close();
}

sendFile();
