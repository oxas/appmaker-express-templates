import "reflect-metadata";
import { DataSource } from "typeorm";
import Book from "../models/book";

const AppDataSource = new DataSource({
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "postgres",
	password: "password",
	database: "postgres",
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
