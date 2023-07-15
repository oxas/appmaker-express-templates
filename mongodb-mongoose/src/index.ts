import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import path from "path";
import books from "./routes/books";

dotenv.config();
const port = process.env.PORT || 3000;
const dbUri = process.env.DB_URI || "mongodb://127.0.0.1:27017/test";

async function run() {
	const app: Express = express();

	// setting up static assets directory
	app.use(express.static("public"));

	app.use(express.json());

	//Connecting to db
	await mongoose.connect(dbUri);

	app.get("/", (req: Request, res: Response) => {
		res.sendFile(path.join(__dirname, "./views/index.html"));
	});

	// Setting up books route
	app.use("/books", books);

	app.listen(port, () => {
		console.log(`⚡️ Express + MongoDB + Mongoose server is running at http://localhost:${port}`);
	});
}

run();
