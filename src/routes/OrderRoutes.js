import express from "express";
import { orderFood } from "../controllers/order.controller.js";

const ordersRoutes = express.Router();

ordersRoutes.post("/order-food", orderFood);
export default ordersRoutes;
