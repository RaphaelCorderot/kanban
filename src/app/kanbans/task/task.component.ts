import { Component, Input, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { TaskModel } from 'src/app/@models/Task';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task: TaskModel | null;

  constructor() {}

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.task?.tags.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(tag: String): void {
    const index = this.task?.tags.indexOf(tag);

    if (index && index >= 0) {
      this.task?.tags.splice(index, 1);
    }
  }
}
