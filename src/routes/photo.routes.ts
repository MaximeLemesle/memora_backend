import express from 'express';
import { getAllPhoto, getPhoto } from '../models/photo.models.ts';
const router = express.Router();

router.get('/', async (req, res) => {
   const {data, error} = await getAllPhoto();
   res.status(200).json(data);
});

router.get('/:id([0-9]+)', async (req, res) => {
    const {data, error} = await getPhoto(+req.params.id);
    res.status(200).json(data);
});

export default router;