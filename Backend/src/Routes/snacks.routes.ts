import { Router } from "express";
import { getSnacks } from "../Controllers/snacks.controller";

const router = Router();

router.get("/snacks", getSnacks);

export default router;
