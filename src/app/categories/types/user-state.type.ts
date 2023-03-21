import { BaseState } from "types/base-state.type";
import { CategoriesDto } from "./category-dto.type";

export interface CategoriesState extends BaseState {
  categories: CategoriesDto[];
  category: CategoriesDto | null;
  pending: {
    categories: boolean;
    category: boolean;
  };
  errors: {
    categories: string | null;
    category: string | null;
  }
}