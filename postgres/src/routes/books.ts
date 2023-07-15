import express, { Request, Response } from "express";
import pool from "../config/db";

const router = express.Router();

// GET books
router.get("/", (req: Request, res: Response) => {
	pool.query("SELECT id, title FROM books", (error, result) => {
		if (error) {
			res.status(400);
			throw new Error(error.message);
		}
		res.status(200).json(result.rows);
	});
});

// POST books
router.post("/", (req: Request, res: Response) => {
	const title = req.body.title;
	// pool.query(`
	// CREATE TABLE IF NOT EXISTS books (
	// 	id serial PRIMARY KEY,
	// 	title varchar(255) NOT NULL
	// 	);`);
	pool.query(`INSERT INTO books (title) VALUES ('${title}')`, (error, _) => {
		if (error) {
			res.status(400);
			throw new Error(error.message);
		}
		res.status(200).send("success");
	});
});

export default router;
