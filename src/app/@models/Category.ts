import { TaskModel } from './Task';

export interface CategoryModel {
  id: number | null;
  tasks: TaskModel[];
  type: string;
}
