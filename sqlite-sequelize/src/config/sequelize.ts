import { Sequelize } from "sequelize";
const dbPath = "./books.db";

const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: dbPath,
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
