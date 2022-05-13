import { CategoryModel } from './Category';

export interface KanbanModel {
  id: number | null;
  categories: CategoryModel[];
}
