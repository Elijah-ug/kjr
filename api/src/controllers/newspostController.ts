import { prisma } from "config/client";
import { Request, Response } from "express";
import { eventsValidator, updateEventsValidator } from "validators/validate";

interface AuthenticatedRequest extends Request {
  admin?: string | object | any;
}

export const store = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const id = req.admin.id
    const parsed = eventsValidator.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid data", error: parsed.error });
    }
    const { adminId } = parsed.data;
    if (!adminId) return res.status(404).json({ message: "404, Admin not found" });
    const newAdmin = await prisma.event.create({ data: { ...parsed.data, adminId: id } });
    console.log("admin added to db==>", newAdmin);
    return res.status(200).json({ message: "Created admin!", newAdmin });
  } catch (error) {
    console.log("Error==>", error);
    return res.status(500).json({ err: error, message: "500 ISE" });
  }
};

export const index = async (req: Request, res: Response) => {
  try {
    const events = await prisma.event.findMany();
    console.log("admin added to db==>", events);
    return res.status(200).json({ message: "events fetched!", events });
  } catch (error) {
    console.log("Error==>", error);
    return res.status(500).json({ err: error, message: "500 ISE" });
  }
};

export const show = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const event = await prisma.event.findUnique({ where: { id } });
    console.log("event fetched ==>", event);
    return res.status(200).json({ message: "event fetched!", event });
  } catch (error) {
    console.log("Error==>", error);
    return res.status(500).json({ err: error, message: "500 ISE" });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const parsed: any = updateEventsValidator.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "400 Invalid data" });
    }
    const admin = await prisma.admin.update({ where: { id }, data: parsed.data });
    console.log("Event Updated ==>", admin);
    return res.status(200).json({ message: "Event Updated!", admin });
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
