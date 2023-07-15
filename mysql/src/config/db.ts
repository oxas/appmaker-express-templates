import mysql from "mysql2";

// Create the connection pool.
const pool = mysql.createPool({
	host: "localhost",
	port: 3306,
	user: "root",
	database: "test",
	password: "password",
});
export default pool;
