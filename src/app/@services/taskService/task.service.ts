import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TaskModel } from 'src/app/@models/Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}
  createEmptyUser(): Observable<TaskModel> {
    const task: TaskModel = {
      id: null,
      label: null,
      date: null,
      designatedUser: null,
      estimatedTime: '',
      tags: [],
      location: '',
      url: '',
      description: '',
    };
    return of(task);
  }
}
