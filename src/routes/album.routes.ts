import express from 'express';
import { getAllAlbum, getAlbum } from '../models/album.models.ts';
const router = express.Router();

router.get('/', async (req, res) => {
   const {data, error} = await getAllAlbum();
   res.status(200).json(data);
});

router.get('/:id([0-9]+)', async (req, res) => {
    const {data, error} = await getAlbum(+req.params.id);
    res.status(200).json(data);
});

export default router;