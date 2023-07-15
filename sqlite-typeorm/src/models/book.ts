import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
class Book {
	@PrimaryGeneratedColumn()
	id: number;

	@Column("varchar")
	title: string;
}

export default Book;
