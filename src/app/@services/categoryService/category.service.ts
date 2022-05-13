import { CategoryModel } from './../../@models/Category';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
   createEmptyCategory(): Observable<CategoryModel> {
    const category: CategoryModel = {
      id: null,
      tasks: [],
      type: '',
    };
    return of(category);
  }
}
