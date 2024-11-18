import express from "express";
import { addTodo, getTodo, updateTodo, deleteTodo } from "../controllers/controller.js";
import { auth } from "../middlewares/auth.js";

const router = express.Router();

router.post('/todos', addTodo);
router.get('/todos', auth, getTodo);
router.put('/todos/:id', updateTodo);
router.delete('/todos/:id', deleteTodo);

export default router;