import { Router } from "express";
import { getDrinks } from "../Controllers/drinks.controller";

const router = Router();

router.get("/drinks", getDrinks);

export default router;
