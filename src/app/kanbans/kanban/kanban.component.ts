import { KanbanService } from './../../@services/kanbanService/kanban-service.service';
import { KanbanModel } from './../../@models/Kanban';
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/@services/taskService/task.service';
import { forkJoin, Observable } from 'rxjs';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { TaskModel } from 'src/app/@models/Task';
import { CategoryService } from 'src/app/@services/categoryService/category.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss'],
})
export class KanbanComponent implements OnInit {
  constructor(
    private kanbanService: KanbanService,
    private taskService: TaskService,
    private categoryService: CategoryService,
    private http: HttpClient,
  ) {}
  kanban: KanbanModel | null;
  ngOnInit(): void {
    this.getKanban(1).subscribe((data) => {
      if (data) {
        this.kanban = data;
      } else {
        forkJoin({
          emptykanban: this.kanbanService.createEmptyKanban(),
          emptyTask: this.taskService.createEmptyUser(),
        }).subscribe((res) => {
          this.kanban = res.emptykanban;
          this.kanban.categories[1].tasks.push(res.emptyTask);
        });
      }
    });
  }
  drop(event: CdkDragDrop<TaskModel[]>) {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
  addNewCategory() {
    this.categoryService
      .createEmptyCategory()
      .subscribe((cat) => this.kanban?.categories.push(cat));
  }
  saveKanban() {
    this.http
      .post<KanbanModel>('http://localhost:8080/kanban', this.kanban)
      .subscribe((data) => {
        this.kanban = data;
      });
  }
  getKanban(id: number): Observable<KanbanModel> {
    return this.http.get<KanbanModel>('http://localhost:8080/kanban?id=' + id);
  }
}
