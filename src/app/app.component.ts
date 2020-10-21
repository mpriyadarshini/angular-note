import { Component } from '@angular/core';
import { Note } from './models/note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  notes = [];
  selectedNote: Note = {
    date: new Date(),
    content: 'Untitle',
  };

 

  onselect(note) {
    this.selectedNote = note;
  }
  onAdd() {
    const note: Note = {
      date: new Date(),
      content: 'Untitle',
    };
    this.selectedNote = note;
    this.notes.push(note);
  }
}
