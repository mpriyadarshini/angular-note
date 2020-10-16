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
  

  @Output() save: EventEmitter<{date:Date,title:string,content:string}> = new EventEmitter<{date:Date,title:string,content:string}>();

  constructor() { }

  ngOnInit(): void {
    
  }

  addNotes(event){
    this.save.emit({date:this.date,title:this.title,content:this.title});
    this.date = ''
    this.title = ''
    this.content = ''
  }

}
