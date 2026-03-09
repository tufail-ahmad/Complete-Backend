const { ImageKit } = require("@imagekit/nodejs");

const imageKit = new ImageKit({
  privateKey: process.env.PRIVATE_KEY,
});

async function uploadImage(buffer) {
  const result = imageKit.files.upload({
    file: buffer.toString("base64"),
    fileName: "car-image",
    folder: "/my-images",
  });

  return result;
}

module.exports = uploadImage;
