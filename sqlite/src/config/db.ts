import { Database } from "sqlite3";
const dbPath = "./books.db";
// Open a SQLite database connection, stored as the file books.db
const db = new Database(dbPath, (error) => {
	if (error) {
		return console.error(error.message);
	}
});
export default db;
