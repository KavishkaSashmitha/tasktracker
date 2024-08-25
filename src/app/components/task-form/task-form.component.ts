import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  constructor(private router: Router) {}
  returnTask() {
    this.router.navigate(['/home']);
  }
  onSubmit() {
    throw new Error('Method not implemented.');
  }
}
