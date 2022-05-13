import { CategoryService } from './../categoryService/category.service';
import { KanbanModel } from './../../@models/Kanban';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KanbanService {
  constructor(private categoryService: CategoryService) {}
  createEmptyKanban(): Observable<KanbanModel> {
    var kanban: KanbanModel = {
      categories: [],
      id: null,
    };
    forkJoin({
      one: this.categoryService.createEmptyCategory(),
      two: this.categoryService.createEmptyCategory(),
      three: this.categoryService.createEmptyCategory(),
    }).subscribe((values) => {
      values.one.type = 'New';
      values.two.type = 'Working';
      values.three.type = 'Done';
      kanban.categories = [values.one, values.two, values.three];
    });
    return of(kanban);
  }

}
