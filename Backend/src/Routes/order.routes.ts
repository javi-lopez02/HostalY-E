import { Router } from "express";
import { authMiddleware } from "../Middlewares/middlewares";
import {
  addDessertItem,
  addGastronomicItem,
  addOfertItem,
  deleteOrderItem,
  getOrderItems,
  updateDessertItem,
  updateGastronomicItem,
} from "../Controllers/order.controller";
const router = Router();

router.get("/products/order", authMiddleware, getOrderItems);

router.post("/oferts/order", authMiddleware, addOfertItem);

router.post("/gastronomics/order", authMiddleware, addGastronomicItem);

router.post("/desserts/order", authMiddleware, addDessertItem);

router.put("/gastronomic/order", authMiddleware, updateGastronomicItem);

router.put("/dessert/order", authMiddleware, updateDessertItem);

router.delete("/products/order", authMiddleware, deleteOrderItem);

export default router;
