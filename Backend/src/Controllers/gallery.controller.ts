import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getGallery = async (req: Request, res: Response) => {
  try {
    const gallery = await prisma.gallery.findMany({
      select: {
        id: true,
        description: true,
        imagen: true,
        createdAt: true   
      },
    });

    res.status(200).json({
      data: gallery,
      meta: {
        name: "Estas son las fotos de la casa",
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(["Internal server error"]);
  }
};
