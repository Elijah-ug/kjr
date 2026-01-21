import { prisma } from "config/client";
import { Request, Response } from "express";
import { newsValidator, updateNewsValidator } from "validators/validate";

interface AuthenticatedRequest extends Request {
  admin?: string | object | any;
}

export const store = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const id = req.admin.id;
    console.log("Id ==>", id);
    const parsed: any = newsValidator.safeParse(req.body);
    if (!parsed.success) {
      console.log("Parsed error==>", parsed.error);
      return res.status(400).json({ message: "Invalid data", error: parsed.error });
    }

    if (!id) return res.status(404).json({ message: "404, Admin not found" });
    const news = await prisma.newsPost.create({ data: { ...parsed.data, adminId: id } });
    console.log("news posted==>", news);
    return res.status(200).json({ message: "Created admin!", news });
  } catch (error) {
    console.log("Error==>", error);
    return res.status(500).json({ err: error, message: "500 ISE" });
  }
};

export const index = async (req: Request, res: Response) => {
  try {
    const news = await prisma.newsPost.findMany({ orderBy: { createdAt: "desc" } });
    // console.log("all news array==>", news);
    return res.status(200).json({ message: "news fetched!", news });
  } catch (error) {
    console.log("Error==>", error);
    return res.status(500).json({ err: error, message: "500 ISE" });
  }
};

export const show = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const news = await prisma.newsPost.findUnique({ where: { id } });
    console.log("news fetched ==>", news);
    return res.status(200).json({ message: "news fetched!", news });
  } catch (error) {
    console.log("Error==>", error);
    return res.status(500).json({ err: error, message: "500 ISE" });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    console.log("fetched news id==>", req.params.id, "id==>", id);
    const parsed: any = updateNewsValidator.safeParse(req.body);
    if (!parsed.success) {
      console.log("Update news Error ==>", parsed.error);
      return res.status(400).json({ message: "400 Invalid data" });
    }
    const news = await prisma.newsPost.update({ where: { id }, data: parsed.data });
    console.log("Event Updated ==>", news);
    return res.status(200).json({ message: "Event Updated!", news });
  } catch (error) {
    console.log("Error==>", error);
    return res.status(500).json({ err: error, message: "500 ISE" });
  }
};

export const destroy = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const response = await prisma.newsPost.delete({ where: { id } });
    console.log("newsPost deleted ==>", response);
    return res.status(200).json({ message: "newsPost deleted!", response });
  } catch (error) {
    console.log("Error==>", error);
    return res.status(500).json({ err: error, message: "500 ISE" });
  }
};
