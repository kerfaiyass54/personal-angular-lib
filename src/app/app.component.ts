import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ColorfulButtonComponent} from "../../projects/shared-ui/src/lib/colorful-button/colorful-button.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet,ColorfulButtonComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-library';
}
