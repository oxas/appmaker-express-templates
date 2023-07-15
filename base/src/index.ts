import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import books from "./routes/books";
import path from "path";

dotenv.config();
const port = process.env.PORT || 3000;

const app: Express = express();

app.use(express.json());

// setting up static assets directory
app.use(express.static("public"));

app.get("/", (req: Request, res: Response) => {
	res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.use("/books", books);

app.listen(port, () => {
	console.log(`⚡️ Express server is running at http://localhost:${port}`);
});
