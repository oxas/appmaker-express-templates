import express, { Request, Response } from "express";
import db from "../config/db";

const router = express.Router();

// GET books
router.get("/", (req: Request, res: Response) => {
	db.all("SELECT * FROM books", (error, rows) => {
		if (error) {
			res.status(400);
			throw new Error(error.message);
		}
		res.status(200).json(rows);
	});
});

// POST books
router.post("/", (req: Request, res: Response) => {
	const title = req.body.title;
	// Remove CREATE TABLE query in production
	db.run(
		`CREATE TABLE IF NOT EXISTS books (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL);`,
		(error) => {
			if (error) {
				console.error(error);
			} else {
				db.all(`INSERT INTO books (title) VALUES ('${title}')`, (error) => {
					if (error) {
						res.status(400);
						throw new Error(error.message);
					}
					res.status(200).json("success");
				});
			}
		}
	);
});

export default router;
