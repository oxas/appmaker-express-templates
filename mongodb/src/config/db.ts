import dotenv from "dotenv";
import { Db, MongoClient } from "mongodb";

dotenv.config();

const connectionString = process.env.DB_URI || "";
const dbName = process.env.DB_NAME || "test";

const client = new MongoClient(connectionString);
let database: Db;

const db = async (): Promise<Db> => {
	// If database instance is null, then create new database instance
	// If database instance already exist, then return previous instance
	// This will stop creation of new Db instance on every reload
	if (!database) {
		try {
			await client.connect();
			console.log("Connected to MongoDB");
			const db: Db = client.db(dbName);
			database = db;
			return database;
		} catch (error) {
			console.error("Error connecting to MongoDB");
			throw error;
		}
	} else {
		return database;
	}
};

export default db;
