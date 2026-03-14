const { ImageKit } = require("@imagekit/nodejs");

const imagekitInstance = new ImageKit({
  privateKey: process.env.PRIVATE_KEY,
});

async function uploadImage(file) {
  const result = await imagekitInstance.files.upload({
    file: file.buffer.toString("base64"),
    fileName: file.originalname,
    folder: "my-images",
  });

  return result;
}

module.exports = uploadImage;
