import { UserModel } from './User';
export interface TaskModel {
  id: number | null;
  label:number | null;
  date : string | null;
  designatedUser: UserModel | null;
  estimatedTime: String;
  tags: String[];
  location: String;
  url: String;
  description: String;
}
