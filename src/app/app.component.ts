import { Component } from '@angular/core';
import { domainToASCII } from 'url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App';
  domainToASCII(): void {
    this.title = this.title.toUpperCase();
  }
}


