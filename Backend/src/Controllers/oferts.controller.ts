import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getOfert = async (req: Request, res: Response) => {
  try {
    const oferts = await prisma.ofert.findMany({
      select: {
        id: true,
        price: true,
        description: true,
      },
    });

    res.status(200).json({
      data: oferts,
      meta: {
        name: "Estas son las ofertas",
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(["Internal server error"]);
  }
};
