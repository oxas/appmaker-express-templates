import express, { Request, Response } from "express";

// DUMMY DATA
const Books = [
	{
		id: "1",
		title: "Arabian Nights",
	},
	{
		id: "2",
		title: "Hamlet",
	},
	{
		id: "3",
		title: "The Alchemist",
	},
];

const router = express.Router();

// GET books
router.get("/", (req: Request, res: Response) => {
	res.json(Books);
});

// POST books
router.post("/", (req: Request, res: Response) => {
	let book = req.body;
	Books.push(book);
	res.send("Success");
});

export default router;
