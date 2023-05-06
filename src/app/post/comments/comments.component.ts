import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Comments } from 'src/app/model/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, OnChanges {
  @Input() commentList: Comments[]|undefined = [];
  @Input() emriasdfasdf: string='';
  
  @Output() selectedComment = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){

  }
  ngAfterContentInit() {
    
  }

  clickedComment(email:string|undefined): void {
    this.selectedComment.emit(email);
  }

  ngOnChanges(changes: SimpleChanges): void {
      
  }

}
