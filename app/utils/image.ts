import sharp from "sharp";

export const pictureFetcher = async () => {
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

export const processImg = async (imgUrl: string) => {
  const picture = (await fetch(imgUrl)).arrayBuffer();

  // const img = await (await pictureFetcher()).arrayBuffer();

  const imgBuffer = sharp(await picture)
    .rotate(40)
    .toBuffer();

  //testing 1 2
  return await imgBuffer;
};
