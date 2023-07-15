import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
	dialect: "mysql",
	host: "localhost",
	port: 3306,
	username: "root",
	database: "test",
	password: "password",
});

sequelize
	.authenticate()
	.then(async () => {
		console.log("Connection has been established successfully.");
		// You can use sequelize.sync() to automatically synchronize all models.
		// Remove sequelize.sync() in production
		await sequelize.sync();
		console.log("All models were synchronized successfully.");
	})
	.catch((error) => {
		console.error("Unable to connect to the database:", error);
		return;
	});

export default sequelize;
