import express from "express";
import { getPage } from "../models/page.models.ts";
import { getPagesController } from "../controllers/page/getPages.ts";
const router = express.Router();

router.get("/", getPagesController);
// router.get("/", async (req, res) => {
//   const { data, error } = await getAllPage();
//   if (error) {
//     res.status(500).json(error);
//   }
//   res.status(200).json(data);
// });

router.get("/:id([0-9]+)", async (req, res) => {
  const { data, error } = await getPage(+req.params.id);
  if (error) {
    res.status(500).json(error);
  }
  res.status(200).json(data);
});

export default router;
