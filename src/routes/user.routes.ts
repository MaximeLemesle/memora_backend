import express from "express";
import { getUsersController } from "../controllers/user/getUsers.ts";
import { getUserByIdController } from "../controllers/user/getUsersById.ts";
import { createUserController } from "../controllers/user/createUser.ts";
import { updateUserController } from "../controllers/user/updateUser.ts";
import { deleteUserController } from "../controllers/user/deleteUser.ts";

const router = express.Router();

router.get("/", getUsersController);
router.get("/:id([0-9]+)", getUserByIdController);
router.post("/", createUserController);
router.put("/:id([0-9]+)", updateUserController);
router.delete("/:id([0-9]+)", deleteUserController);

export default router;