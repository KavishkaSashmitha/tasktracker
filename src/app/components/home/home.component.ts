import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { TasksComponent } from "../tasks/tasks.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, TasksComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
