import cloudinary from "config/cloudinary";
import streamifier from "streamifier";
import { UploadApiErrorResponse, UploadApiResponse } from "cloudinary";

cloudinary.config({ secure: true });

export const uploadToCloudinary = (buffer: Buffer, options: Record<string, any> = {}): Promise<UploadApiResponse> => {
  return new Promise<UploadApiResponse>((resolve, reject) => {
    //  create a writable stream
    const stream = cloudinary.uploader.upload_stream(
      options,
      (error?: UploadApiErrorResponse, result?: UploadApiResponse) => {
        if (error) {
          console.log("Error here==>", error);
          return reject(error);
        }
        if (!result) {
          console.log("Something's breaking here");
          return reject(new Error("Upload failed!"));
        }
        resolve(result);
      },
    );
    streamifier.createReadStream(buffer).pipe(stream);
  });
};
