import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  date;
  title;
  content;
  

  @Output() notes: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor() { }

  ngOnInit(): void {
    this.notes.emit([this.date,this.title,this.content]);
  }
  addNotes(date,title,content){
    //this.notes.push(date,title,content);
    console.log(this.notes);
    this.date = ''
    this.title = ''
    this.content = ''

  }

}
