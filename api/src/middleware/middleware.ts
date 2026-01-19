import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
 interface AuthenticatedRequest extends Request {
  admin?: string | object;
}
export const verifyToken = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const headers = req.headers.authorization;
  if (!headers) {
    console.log("No headers");
    return res.status(403).json({ message: "403 Access denied!" });
  }
  const token = headers.split(" ")[1];
  if (!token) {
    console.log("No tpoken found");
    return res.status(404).json({ message: "404, Token not found!" });
  }
  try {
    const JWT_SECRET = process.env.JWT_SECRET as string;

    const decoded = jwt.verify(token, JWT_SECRET);
    req.admin = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid or expired token", err: error });
  }
};
