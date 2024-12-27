import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getDesserts = async (req: Request, res: Response) => {
  try {
    const desserts = await prisma.desserts.findMany({
      select: {
        id: true,
        price: true,
        imagen: true,
        name: true,
        createdAt: true,
      },
    });

    res.status(200).json({
      data: desserts,
      meta: {
        name: "Estos son los postres",
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(["Internal server error"]);
  }
};
