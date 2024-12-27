import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getEvents = async (req: Request, res: Response) => {
  try {
    const events = await prisma.events.findMany({
      select: {
        id: true,
        description: true,
        imagen: true,
        createdAt: true,
      },
    });

    res.status(200).json({
      data: events,
      meta: {
        name: "Estas son las fotos de la casa",
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(["Internal server error"]);
  }
};
