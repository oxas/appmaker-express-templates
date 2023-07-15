import express, { Request, Response } from "express";
import db from "../config/db";

const router = express.Router();

// GET books
router.get("/", async (req: Request, res: Response) => {
	const database = await db();
	const books = await database.collection("books").find({}).limit(10).toArray();
	res.json(books);
});

// POST books
router.post("/", async (req: Request, res: Response) => {
	const database = await db();
	let book = req.body;
	const result = await database.collection("books").insertOne(book);
	res.send(result);
});

export default router;
