import { prisma } from "config/client";
import { Request, Response } from "express";
import { uploadToCloudinary } from "services/cloudinary";
import { eventsValidator, updateEventsValidator } from "validators/validate";

interface AuthenticatedRequest extends Request {
  admin?: string | object | any;
}

export const store = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const id = req.admin.id;
    const parsed: any = eventsValidator.safeParse(req.body);
    if (!parsed.success) {
      console.log("Event parsed error==>", parsed.error);
      return res.status(400).json({ message: "Invalid data", error: parsed.error });
    }
    if (!id) return res.status(404).json({ message: "404, Admin not found" });
    if (!req.file || !req.file.buffer) {
      console.log("Event image is required==>", req.file);
    }
    // upload the image
    const uploaded = await uploadToCloudinary(req.file?.buffer!, { folder: "kjr_events" });
    // console.log("Image to be stored==>", uploaded);
    const event = await prisma.event.create({
      data: { ...parsed.data, adminId: id, picurl: { url: uploaded.secure_url, publicId: uploaded.public_id } },
    });
    // console.log("added event==>", event);
    return res.status(200).json({ message: "Created Event!", event });
  } catch (error) {
    console.log("Error==>", error);
    return res.status(500).json({ err: error, message: "500 ISE" });
  }
};

export const index = async (req: Request, res: Response) => {
  try {
    const events = await prisma.event.findMany({ orderBy: { createdAt: "desc" } });
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
      console.log("Update Error ==>", parsed.error);
      return res.status(400).json({ message: "400 Invalid data", err: parsed.error });
    }
    const event = await prisma.event.update({ where: { id }, data: parsed.data });
    console.log("Event Updated ==>", event);
    return res.status(201).json({ message: "Event Updated!", event });
  } catch (error) {
    console.log("Error==>", error);
    return res.status(500).json({ err: error, message: "500 ISE" });
  }
};

export const destroy = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const event = await prisma.event.delete({ where: { id } });
    console.log("event deleted ==>", event);
    return res.status(200).json({ message: "event deleted!", event });
  } catch (error) {
    console.log("Error==>", error);
    return res.status(500).json({ err: error, message: "500 ISE" });
  }
};
