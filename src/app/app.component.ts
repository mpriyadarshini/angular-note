import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  notes = []
  date;
  content;
  title;

  onsave(){
    this.notes.push(this.date,this.title,this.content);
  }
}
