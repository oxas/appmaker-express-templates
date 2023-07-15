import express, { Request, Response } from "express";
import Book from "../models/book";

const router = express.Router();

// GET books
router.get("/", async (req: Request, res: Response) => {
	const books = await Book.findAll();
	res.json(books);
});

// POST books
router.post("/", async (req: Request, res: Response) => {
	const body = req.body;
	const result = await Book.create(body);
	res.status(200).json(result);
});

export default router;
