import express from "express";
import { rateRes, getRateByRes,getRateByUser } from "../controllers/rateRes.controller.js";

const rateResRoutes = express.Router();

rateResRoutes.post("/rate-res", rateRes);

rateResRoutes.get("/get-rate-res/:res_id", getRateByRes);

rateResRoutes.get("/get-rate-user/:user_id",getRateByUser)

export default rateResRoutes;
