import "reflect-metadata";
import { DataSource } from "typeorm";
import Book from "../models/book";
const dbPath = "./books.db";

const AppDataSource = new DataSource({
	type: "sqlite",
	database: dbPath,
	synchronize: true, //Turn off in production
	logging: true, //Turn off in production
	entities: [Book],
	subscribers: [],
	migrations: [],
});

AppDataSource.initialize()
	.then(() => {
		console.log("Connected to database");
	})
	.catch((error) => console.error(error));

export default AppDataSource;
