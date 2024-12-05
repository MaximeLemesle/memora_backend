import express from "express";
import { getPhoto } from "../models/photo.models.ts";
import { getPhotosController } from "../controllers/photo/getPhotos.ts";
const router = express.Router();

router.get("/", getPhotosController);
// router.get("/", async (req, res) => {
//   const { data, error } = await getAllPhoto();
//   if (error) {
//     res.status(500).json(error);
//   }
//   res.status(200).json(data);
// });

router.get("/:id([0-9]+)", async (req, res) => {
  const { data, error } = await getPhoto(+req.params.id);
  if (error) {
    res.status(500).json(error);
  }
  res.status(200).json(data);
});

export default router;
