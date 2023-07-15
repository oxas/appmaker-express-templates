import express, { Request, Response } from "express";
import Book from "../models/book";
import AppDataSource from "../config/data-source";

const router = express.Router();

// GET books
router.get("/", async (req: Request, res: Response) => {
	const books = await AppDataSource.manager.find(Book);
	res.json(books);
});

// POST books
router.post("/", async (req: Request, res: Response) => {
	const book = new Book();
	book.title = req.body.title;
	const result = await AppDataSource.manager.save(book);
	res.status(200).json(result);
});

export default router;
