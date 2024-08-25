import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Router } from '@angular/router'; // Import the correct module for Router

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title: string = 'Task-Tracker';
  showTaskForm: boolean = false;
  constructor(private router: Router) {}

  toggleAddTask() {
    this.router.navigate(['/task-form']);
  }
}
