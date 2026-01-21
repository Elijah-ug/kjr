import { prisma } from "config/client";
import { Request, Response } from "express";
import { messageValidator } from "validators/validate";

interface AuthenticatedRequest extends Request {
  admin?: string | object | any;
}

export const store = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const parsed: any = messageValidator.safeParse(req.body);
    if (!parsed.success) {
      console.log("Parsed error==>", parsed.error);
      return res.status(400).json({ message: "Invalid data", error: parsed.error });
    }

    const msg = await prisma.message.create({ data: parsed.data });
    // console.log("message sent==>", msg);
    return res.status(200).json({ message: "Message Sent!", msg });
  } catch (error) {
    console.log("Error, Not Sent==>", error);
    return res.status(500).json({ err: error, message: "500 ISE" });
  }
};

export const index = async (req: Request, res: Response) => {
  try {
    const msg = await prisma.message.findMany({ orderBy: { submittedAt: "desc" } });
    // console.log("all messages==>", msg);
    return res.status(200).json({ message: "Messages fetched!", msg });
  } catch (error) {
    console.log("Error==>", error);
    return res.status(500).json({ err: error, message: "500 ISE" });
  }
};

export const show = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const msg = await prisma.message.findUnique({ where: { id } });
    console.log("msg fetched ==>", msg);
    return res.status(200).json({ message: "Message fetched!", msg });
  } catch (error) {
    console.log("Error==>", error);
    return res.status(500).json({ err: error, message: "500 ISE" });
  }
};

export const destroy = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const result = await prisma.message.delete({ where: { id } });
    console.log("Message deleted ==>", result);
    return res.status(200).json({ message: "Message deleted!", result });
  } catch (error) {
    console.log("Error==>", error);
    return res.status(500).json({ err: error, message: "500 ISE" });
  }
};
