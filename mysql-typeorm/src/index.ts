import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import path from "path";
import books from "./routes/books";

dotenv.config();
const port = process.env.PORT || 3000;

const app: Express = express();

// setting up static assets directory
app.use(express.static("public"));

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
	res.sendFile(path.join(__dirname, "./views/index.html"));
});

// Setting up books route
app.use("/books", books);

app.listen(port, () => {
	console.log(`⚡️ Express + MySQL + TypeORM server is running at http://localhost:${port}`);
});
