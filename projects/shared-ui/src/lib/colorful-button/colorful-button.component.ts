import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-colorful-button',
  imports: [],
  standalone: true,
  templateUrl: './colorful-button.component.html',
  styleUrl: './colorful-button.component.css',
})
export class ColorfulButtonComponent {


  @Input() content: any = '';
  @Input() link:any = '';

}
