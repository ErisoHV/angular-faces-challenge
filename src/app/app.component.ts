import { Component } from '@angular/core';
import {AdorableFaceComponent} from './adorable-face/adorable-face.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    AdorableFaceComponent
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'faces-challenge';
}
