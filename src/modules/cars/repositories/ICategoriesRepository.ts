import { Category } from "../model/Category";

/**
 * SOLID - LSP (Liskov Substitution Principle)
 *
 * The contract
 */

// DTO => Data transfer object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}

export { ICreateCategoryDTO, ICategoriesRepository };
