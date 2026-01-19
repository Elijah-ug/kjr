import { prisma } from "config/client";
import { Request, Response } from "express";
import { adminValidator, updateAdminValidator } from "validators/validate";
import bcrypt from "bcrypt";

export const store = async (req: Request, res: Response) => {
  try {
    const parsed = adminValidator.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid data", error: parsed.error });
    }
    const hashedPwd: string | any = await bcrypt.hash(parsed.data.password, 10);
    const newAdmin = await prisma.admin.create({ data: { ...parsed.data, password: hashedPwd } });
    console.log("admin added to db==>", newAdmin);
    return res.status(200).json({ message: "Created admin!", newAdmin });
  } catch (error) {
    console.log("Error==>", error);
    return res.status(500).json({ err: error, message: "500 ISE" });
  }
};

export const index = async (req: Request, res: Response) => {
  try {
    const admins = await prisma.admin.findMany();
    console.log("admin added to db==>", admins);
    return res.status(200).json({ message: "Admins fetched!", admins });
  } catch (error) {
    console.log("Error==>", error);
    return res.status(500).json({ err: error, message: "500 ISE" });
  }
};

export const show = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const admin = await prisma.admin.findUnique({ where: { id } });
    console.log("admin fetched ==>", admin);
    return res.status(200).json({ message: "Admin fetched!", admin });
  } catch (error) {
    console.log("Error==>", error);
    return res.status(500).json({ err: error, message: "500 ISE" });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const parsed: any = updateAdminValidator.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "400 Invalid data" });
    }
    const admin = await prisma.admin.update({ where: { id }, data: parsed.data });
    console.log("admin fetched ==>", admin);
    return res.status(200).json({ message: "Admin fetched!", admin });
  } catch (error) {
    console.log("Error==>", error);
    return res.status(500).json({ err: error, message: "500 ISE" });
  }
};

export const destroy = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const admin = await prisma.admin.delete({ where: { id } });
    console.log("admin deleted ==>", admin);
    return res.status(200).json({ message: "Admin deleted!", admin });
  } catch (error) {
    console.log("Error==>", error);
    return res.status(500).json({ err: error, message: "500 ISE" });
  }
};
