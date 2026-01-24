import cloudinary from "config/cloudinary";

export const deleteImage = async (publicId: string) => {
  return cloudinary.uploader.destroy(publicId);
};
