import { Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.page.html',
  styleUrls: ['./tasks-list.page.scss'],
})
export class TasksListPage implements OnInit {
  tasks$: Observable<Task[]>;

  constructor() {}

  ngOnInit() {
    this.tasks$ = of([
      { id: '1', title: 'Task 1', done: false },
      { id: '2', title: 'Task 2', done: true },
      { id: '3', title: 'Task 3', done: false },
    ]);
  }
}
