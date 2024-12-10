import express from "express";
import type { Request, Response, Router } from "express";
import { getAlbum, postAlbum, updateAlbum, deleteAlbum } from "../models/album.models.ts";
import { Album } from "../types/index";
import { getAlbumsController } from "../controllers/album/getAlbums.ts";
import { getAlbumByIdController } from "../controllers/album/getAlbumById.ts";
import { createAlbumController } from "../controllers/album/createAlbum.ts";

const router: Router = express.Router();

router.get("/", getAlbumsController);
router.get("/:id([0-9]+)", getAlbumByIdController);
router.post("/", createAlbumController);

// --- POST --- //

// router.post("/", async (req: Request, res: Response) => {
//   const album: Album = req.body;

//   const { data, error } = await postAlbum(album);
//   if (error) {
//     res.status(500).json(error);
//   }
//   res.status(200).json(data);
// });

// --- UPDATE --- //

router.put("/", async (req: Request, res: Response) => {
  const album: Album = req.body;

  const { data, error } = await updateAlbum(album);
  if (error) {
    res.status(500).json(error);
  }
  res.status(200).json(data);
});

// --- DELETE --- //

router.delete("/", async (req: Request, res: Response) => {
  const album: Album = req.body;

  const { data, error } = await deleteAlbum(album);
  if (error) {
    res.status(500).json(error);
  }
  res.status(200).json(data);
});

export default router;