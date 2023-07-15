import express, { Request, Response } from "express";
import pool from "../config/db";

const router = express.Router();

// GET books
router.get("/", (req: Request, res: Response) => {
	pool.query("SELECT * FROM books", (error, result) => {
		if (error) {
			res.status(400);
			throw new Error(error.message);
		}
		res.status(200).json(result);
	});
});

// POST books
router.post("/", (req: Request, res: Response) => {
	const body = req.body;
	pool.query(`
	CREATE TABLE IF NOT EXISTS books (
		id int(11) NOT NULL auto_increment,
		title varchar(255) NOT NULL,
		PRIMARY KEY(id)
		);`);
	pool.query(`INSERT INTO books (title) VALUES ('${body.title}')`, (error, result) => {
		if (error) {
			res.status(400);
			throw new Error(error.message);
		}
		res.status(200).json(result);
	});
});

export default router;
