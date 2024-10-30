import express from "express";
import {
  likeRes,
  unlikeRes,
  getLikeByRes,
  getLikeByUser,
} from "../controllers/likeRes.controller.js";

const likeResRoutes = express.Router();

likeResRoutes.post("/like-res", likeRes);

likeResRoutes.delete("/unlike-res/:like_res_id", unlikeRes);

likeResRoutes.get("/get-like-res/:res_id", getLikeByRes);

likeResRoutes.get("/get-like-user/:user_id", getLikeByUser);

export default likeResRoutes;
