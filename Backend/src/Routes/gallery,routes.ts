import { Router } from "express";
import { getGallery } from "../Controllers/gallery.controller";

const router = Router();

router.get("/gallery", getGallery);

export default router;
