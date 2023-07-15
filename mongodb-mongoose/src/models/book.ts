import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
	title: {
		type: String,
		require: true,
	},
});

const Book = mongoose.model("Book", BookSchema);

export default Book;
