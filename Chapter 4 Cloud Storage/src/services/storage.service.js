const { ImageKit } = require("@imagekit/nodejs");

const imagekitInstance = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function uploadImage(file) {
  const result = await imagekitInstance.files.upload({
    file,
    fileName: "car-images",
    folder: "/car-images",
  });

  return result;
}

module.exports = { uploadImage };
