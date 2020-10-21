import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Note } from '../models/note';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  //@Output() save = new EventEmitter<Note>();

  @Input() note: Note;

  constructor() {}

  ngOnInit(): void {}

  addNotes() {
    //this.save.emit(this.note);
  }
}
