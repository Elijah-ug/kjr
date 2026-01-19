import jwt from "jsonwebtoken";

export const createAuthToken = (payload: any) => {
  const JWT_SECRET = process.env.JWT_SECRET as string;
  if (!JWT_SECRET) {
    console.log("No JWT_SECRET==>", JWT_SECRET);
  }
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1day" });
};
