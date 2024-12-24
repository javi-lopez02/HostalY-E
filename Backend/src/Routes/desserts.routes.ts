import { Router } from "express";
import { getDesserts } from "../Controllers/desserts.controller";

const router = Router();

router.get("/desserts", getDesserts);

export default router;
