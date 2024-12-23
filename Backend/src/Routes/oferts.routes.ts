import { Router } from "express";
import { getOfert } from "../Controllers/oferts.controller";

const router = Router();

router.get("/oferts", getOfert);

export default router;
