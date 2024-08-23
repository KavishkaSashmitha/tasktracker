import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'], // Fixed the typo from `styleUrl` to `styleUrls`
})
export class ButtonComponent {
  @Input() text: string | undefined;
  @Input() color: string | undefined;
  @Output() btnClick = new EventEmitter<void>(); // Specifying the type as `void`

  onClick() {
    this.btnClick.emit();
  }

  constructor() {}
}
