import { Router } from "express";
import { getDesserts } from "../Controllers/desserts.controller";

const router = Router();

router.get("/deserts", getDesserts);

export default router;
