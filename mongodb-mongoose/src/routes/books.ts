import express, { Request, Response } from "express";
import Book from "../models/book";

const router = express.Router();

// GET books
router.get("/", async (req: Request, res: Response) => {
	const books = await Book.find();
	res.json(books);
});

// POST books
router.post("/", async (req: Request, res: Response) => {
	let book = req.body;
	const result = await Book.create(book);
	res.send(result);
});

export default router;
