import { Pool } from "pg";

const pool = new Pool({
	user: "postgres",
	host: "localhost",
	port: 5432,
	database: "postgres",
	password: "password",
});

export default pool;
