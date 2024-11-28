import express from "express";
import type { Request, Response, Router } from "express";
import { getAllAlbum, getAlbum, postAlbum } from "../models/album.models.ts";

const router: Router = express.Router();

// --- GET --- //

router.get("/", async (req: Request, res: Response) => {
  const { data, error } = await getAllAlbum();
  if (error) {
    res.status(500).json(error);
  }
  res.status(200).json(data);
});

router.get("/:id([0-9]+)", async (req: Request, res: Response) => {
  const { data, error } = await getAlbum(+req.params.id);
  if (error) {
    res.status(500).json(error);
  }
  res.status(200).json(data);
});

// --- POST --- //
type Album = {
  title: Text;
  album_description: Text;
};

router.post("/", async (req: Request, res: Response) => {
  const album: Album = req.body;

  const { data, error } = await postAlbum(album);
  if (error) {
    res.status(500).json(error);
  }
  res.status(200).json(data);
});

export default router;