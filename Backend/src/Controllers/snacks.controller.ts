import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getSnacks = async (req: Request, res: Response) => {
  try {
    const snacks = await prisma.snacks.findMany({
      select: {
        id: true,
        price: true,
        name: true,
        imagen: true
      },
    });

    res.status(200).json({
      data: snacks,
      meta: {
        name: "Estas son las meriendas",
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(["Internal server error"]);
  }
};
