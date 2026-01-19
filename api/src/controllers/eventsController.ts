import { prisma } from "config/client";
import { Request, Response } from "express";
import { newsValidator, updateNewsValidator } from "validators/validate";

export const store = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const parsed = newsValidator.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid data", error: parsed.error });
    }
    const { adminId } = parsed.data;
    if (!adminId) return res.status(404).json({ message: "404, Admin not found" });
    const news = await prisma.newsPost.create({ data: { ...parsed.data, adminId: id } });
    console.log("admin added to db==>", news);
    return res.status(200).json({ message: "Created admin!", news });
  } catch (error) {
    console.log("Error==>", error);
    return res.status(500).json({ err: error, message: "500 ISE" });
  }
};

export const index = async (req: Request, res: Response) => {
  try {
    const news = await prisma.newsPost.findMany();
    console.log("admin added to db==>", news);
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
    const parsed: any = updateNewsValidator.safeParse(req.body);
    if (!parsed.success) {
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
    const news = await prisma.newsPost.delete({ where: { id } });
    console.log("event deleted ==>", news);
    return res.status(200).json({ message: "event deleted!", news });
  } catch (error) {
    console.log("Error==>", error);
    return res.status(500).json({ err: error, message: "500 ISE" });
  }
};
