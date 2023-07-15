import "reflect-metadata";
import { DataSource } from "typeorm";
import Book from "../models/book";

const AppDataSource = new DataSource({
	type: "mysql",
	host: "localhost",
	port: 3306,
	username: "root",
	password: "password",
	database: "test",
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
