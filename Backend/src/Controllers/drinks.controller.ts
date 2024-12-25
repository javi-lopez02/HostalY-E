import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getDrinks = async (req: Request, res: Response) => {
  try {
    const drinks = await prisma.drinks.findMany({
      select: {
        id: true,
        price: true,
        name: true,
        imagen: true
      },
    });

    res.status(200).json({
      data: drinks,
      meta: {
        name: "Estas son las bebidas",
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(["Internal server error"]);
  }
};
