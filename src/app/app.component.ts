//Import components here 
import { Component } from '@angular/core';

//Component decorator, where we can find template, CSS style sheet
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//Component logic 
export class AppComponent {
  title = 'mydist';
}
