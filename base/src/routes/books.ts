import express, { Request, Response } from "express";

const Books = [
	{
		id: "1",
		title: "Moby Dick",
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

router.get("/", (req: Request, res: Response) => {
	res.json(Books);
});

router.post("/", (req: Request, res: Response) => {
	let book = req.body;
	Books.push(book);
	res.send("Success");
});

export default router;
