import sharp from "sharp";

const pictureFetcher = async () => {
  const picture = await fetch("https://picsum.photos/200/300");

  return picture;
};

// const picture = await pictureFetcher();

export const fun = async () => {
  const img = await (await pictureFetcher()).arrayBuffer();

  const imgBuffer = sharp(img).rotate(40).toBuffer();

  //testing 1 2
  return await imgBuffer;
};
