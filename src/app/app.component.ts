import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myProperty: string = 'Hey!! click on the button';
  myArr = [
    { 'title': 'My title1', 'desc': 'This is a short desc1'},
    { 'title': 'My title2', 'desc': 'This is a short desc2'},
    { 'title': 'My title3', 'desc': 'This is a short desc3'},
  ];

  myMethod(): void {
    this.myProperty = 'I have clicked';
  }
}
