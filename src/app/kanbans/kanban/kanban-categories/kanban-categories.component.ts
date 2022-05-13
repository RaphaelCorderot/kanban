import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoryModel } from 'src/app/@models/Category';
import { TaskModel } from 'src/app/@models/Task';
import { TaskService } from 'src/app/@services/taskService/task.service';

@Component({
  selector: 'kanban-categories',
  templateUrl: './kanban-categories.component.html',
  styleUrls: ['./kanban-categories.component.scss'],
})
export class KanbanCategoriesComponent implements OnInit {
  @Input() category: CategoryModel | null = null;
  @Output() updateCanvasEvent = new EventEmitter<void>();
  tasks: TaskModel[] = [];
  constructor(private taskService : TaskService) {}

  ngOnInit(): void {}

  onChangeTitle(event: Event) {
    if (this.category && event && event.target) {
      const target = event.target as HTMLTextAreaElement;
      this.category.type = target.value;
    }
  }
  createEmptyTask()
  {
    this.taskService.createEmptyUser().subscribe((task)=>this.category?.tasks.push(task));
  }
}
