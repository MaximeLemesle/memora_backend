import express from "express";
import { getComment } from "../models/comment.models.ts";
import { getCommentsController } from "../controllers/comment/getComments.ts";
const router = express.Router();

router.get("/", getCommentsController);
// router.get("/", async (req, res) => {
//   const { data, error } = await getAllComment();
//   if (error) {
//     res.status(500).json(error);
//   }
//   res.status(200).json(data);
// });

router.get("/:id([0-9]+)", async (req, res) => {
  const { data, error } = await getComment(+req.params.id);
  if (error) {
    res.status(500).json(error);
  }
  res.status(200).json(data);
});

export default router;
