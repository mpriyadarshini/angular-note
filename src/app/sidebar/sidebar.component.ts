import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../models/note';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  
  @Input() notes: Note[] 
  
  @Output() select = new EventEmitter<Note>();

  @Output() add = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }
  onclick(note){
    this.select.emit(note);
  }
  onAdd(){
    this.add.emit();
  }

}
