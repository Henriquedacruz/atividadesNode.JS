import express from "express";
import user from "./controllers/userController.js";

const router = express.Router();

// se a requisição for referente a usuario ela sera mandada para o controller de usuario
router.use('/user', user);

export default router;