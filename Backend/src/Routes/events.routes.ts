import { Router } from "express";
import { getEvents } from "../Controllers/events.controller";

const router = Router();

router.get("/events", getEvents);

export default router;
