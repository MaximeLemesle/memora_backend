import express from 'express';
import { getAllUser, getUser } from '../models/user.models.ts';
const router = express.Router();

router.get('/', async (req, res) => {
   const {data, error} = await getAllUser();
   res.status(200).json(data);
});

router.get('/:id([0-9]+)', async (req, res) => {
    const {data, error} = await getUser(+req.params.id);
    res.status(200).json(data);
});

export default router;