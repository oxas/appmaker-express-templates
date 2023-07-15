import { INTEGER, Model, STRING } from "sequelize";
import sequelize from "../config/sequelize";

export interface BookModel extends Model {
	id: number;
	title: string;
}

const Book = sequelize.define<BookModel>(
	"book",
	{
		id: {
			type: INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		title: STRING,
	},
	{ timestamps: false }
);

export default Book;
