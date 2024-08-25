import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
interface Task {
  name: string;
  description: string;
  active?: boolean;
}
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks: Task[] = [
    { name: 'Task 1', description: 'Description for Task 1' },
    { name: 'Task 2', description: 'Description for Task 2' },
    // Add more tasks as needed
  ];

  selectedTask: Task | null = null;

  activateTask(task: Task): void {
    this.selectedTask = task;
    // Optionally, mark the selected task as active
    this.tasks.forEach((t) => (t.active = t === task));
  }

  editTask(): void {
    // Implement your edit logic here
  }
}
