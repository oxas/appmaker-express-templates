import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import path from "path";
import books from "./routes/books";

dotenv.config();
const port = process.env.PORT || 3000;

const app: Express = express();

app.use(express.json());

// setting up static assets directory
app.use(express.static("public"));

app.get("/", (req: Request, res: Response) => {
	res.sendFile(path.join(__dirname, "./views/index.html"));
});

// Setting up books route
app.use("/books", books);

app.listen(port, () => {
	console.log(`⚡️ Express + MongoDB server is running at http://localhost:${port}`);
});
