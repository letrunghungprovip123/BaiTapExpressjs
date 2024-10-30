import express from "express";
import likeResRoutes from "./likeResRoutes.js";
import rateResRoutes from "./rateResRoutes.js";
import ordersRoutes from "./OrderRoutes.js";

const rootRoutes = express.Router();

rootRoutes.use("/like", likeResRoutes);

rootRoutes.use("/rate", rateResRoutes);

rootRoutes.use("/order", ordersRoutes);

export default rootRoutes;
