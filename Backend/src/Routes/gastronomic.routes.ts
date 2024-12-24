import { Router } from "express";
import { getGastronomic } from "../Controllers/gastronomic.controller";

const router = Router();

router.get("/gastronomics", getGastronomic);

export default router;
