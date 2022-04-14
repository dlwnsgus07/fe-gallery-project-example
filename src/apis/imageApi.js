import { images } from "./fakeResponse";

export const getAllImages = async () => {
  return images;
};

export const getImageById = async (id) => {
  return images.find((image) => image.id === id);
};
