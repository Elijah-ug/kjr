import { prisma } from "config/client";
import { Request, Response } from "express";
import { adminLoginValidator, adminValidator, updateAdminValidator } from "validators/validate";
import bcrypt from "bcrypt";
import { createAuthToken } from "utils/jwt";
import { safeUser } from "utils/utils";

interface AuthenticatedRequest extends Request {
  admin?: string | object | any;
}

export const store = async (req: Request, res: Response) => {
  try {
    const parsed = adminValidator.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid data", error: parsed.error });
    }
    const hashedPwd: string | any = await bcrypt.hash(parsed.data.password, 10);

    const newAdmin = await prisma.admin.create({ data: { ...parsed.data, password: hashedPwd } });
    const payload: any = { id: newAdmin.id, email: newAdmin.email };
    const token = createAuthToken(payload);
    console.log("admin added to db==>", newAdmin, "Token==>", token);
    return res.status(200).json({ message: "Created admin!", token });
  } catch (error) {
    console.log("Error==>", error);
    return res.status(500).json({ err: error, message: "500 ISE" });
  }
};

export const index = async (req: Request, res: Response) => {
  try {
    const admins = await prisma.admin.findMany();
    // console.log("admin added to db==>", admins);
    return res.status(200).json({ message: "Admins fetched!", admins });
  } catch (error) {
    console.log("Error==>", error);
    return res.status(500).json({ err: error, message: "500 ISE" });
  }
};

export const show = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const id = req?.admin?.id;
    const admin = await prisma.admin.findUnique({ where: { id } });
    const currentAdmin = safeUser(admin);
    // console.log("admin fetched ==>", currentAdmin);
    return res.status(200).json({ message: "Admin fetched!", currentAdmin });
  } catch (error) {
    console.log("Error==>", error);
    return res.status(500).json({ err: error, message: "500 ISE" });
  }
};

export const update = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const id = req.admin.id;
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

export const destroy = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const id = req.admin.id;
    const admin = await prisma.admin.delete({ where: { id } });
    console.log("admin deleted ==>", admin);
    return res.status(200).json({ message: "Admin deleted!", admin });
  } catch (error) {
    console.log("Error==>", error);
    return res.status(500).json({ err: error, message: "500 ISE" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const parsed = adminLoginValidator.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ message: "400, invalid data" });
    const { email, password } = parsed.data;
    const account = await prisma.admin.findUnique({ where: { email } });
    if (!account) return res.status(404).json({ message: "404, Account not found" });
    const isPwd = bcrypt.compare(password, account.password);
    if (!isPwd) return res.status(401).json({ message: "401, Bad request, password mismatch" });
    const payload = { id: account.id, email: account.email };
    const token = createAuthToken(payload);
    console.log("parsed data==>", token);

    return res.status(200).json({ message: "Admin Logged in", token });
  } catch (error) {
    console.log("Error==>", error);
    return res.status(500).json({ err: error, message: "500 ISE" });
  }
};
