import { Router } from "express";
import { v4 as uuidv4 } from "uuid";

import { Category } from "../model/Category";

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const category = new Category();

  // 'Object' is responsible for taking an object and assigning data
  Object.assign(category, {
    name,
    description,
    created_at: new Date(),
  });

  categories.push(category);

  return response.status(201).json(category);
});

export { categoriesRoutes };
