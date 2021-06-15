import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  /**
   * SOLID - DIP (Dependency Inversion Principle)
   * The "service" doesn't need to know what kind of storage we're using. Therefore,
   * we declare the database access object in the constructor
   */
  // eslint-disable-next-line prettier/prettier
  constructor(private categoriesRepository: ICategoriesRepository) { }

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    /**
     *  SOLID - SRP (Single Responsibility Principle)
     * - You cannot return a "response" because this term is from "Express"
     * - It is not the responsibility of the "service module" to do this
     * - Uncouple my code's dependency to "Express"
     */
    if (categoryAlreadyExists) {
      throw new Error("Category already exists!");
      // return response.status(400).json({ error: "Category already exists!" });
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
