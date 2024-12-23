import { Router } from "express";
import { getGastronomic } from "../Controllers/gastronomic.controller";

const router = Router();

router.get("/gastronomic", getGastronomic);

export default router;
