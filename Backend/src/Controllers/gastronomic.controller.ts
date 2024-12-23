import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getGastronomic = async (req: Request, res: Response) => {
  try {
    const oferts = await prisma.gastronomic.findMany({
      select: {
        id: true,
        imagen: true,
        price: true,
        description: true,
      },
    });

    res.status(200).json({
      data: oferts,
      meta: {
        name: "hola",
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(["Internal server error"]);
  }
};
