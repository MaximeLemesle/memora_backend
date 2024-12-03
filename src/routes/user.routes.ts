import express from "express";
import { getUser } from "../models/user.models.ts";
import { getUsersController } from "../controllers/user/getUsers.ts";
const router = express.Router();


router.get("/", getUsersController);
// router.get("/", async (req, res) => {
//   const { data, error } = await getAllUser();
//   if (error) {
//     res.status(500).json(error);
//   }
//   res.status(200).json(data);
// });

router.get("/:id([0-9]+)", async (req, res) => {
  const { data, error } = await getUser(+req.params.id);
  if (error) {
    res.status(500).json(error);
  }
  res.status(200).json(data);
});

export default router;
