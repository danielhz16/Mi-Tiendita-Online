import sharp from "sharp";
import { client } from "../../../config/imgur.js";

export const processPhoto = async (photo) => {
  if (!photo) return ''
  try {
  const image = sharp(photo);
  const metadata = await image.metadata();

  if (metadata.format === 'webp') {
    photo = await image.toFormat('jpeg').toBuffer();
  }

  const base64Photo = photo.toString('base64');

  const response = await client.upload({
    image: base64Photo,
    type: 'base64',
  });

 return response.data.link;
} catch (error) {
  throw new Error(error);
}
}