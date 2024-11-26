import express from 'express';
import { getAllComment, getComment } from '../models/comment.models.ts';
const router = express.Router();

router.get('/', async (req, res) => {
   const {data, error} = await getAllComment();
   res.status(200).json(data);
});

router.get('/:id([0-9]+)', async (req, res) => {
    const {data, error} = await getComment(+req.params.id);
    res.status(200).json(data);
});

export default router;