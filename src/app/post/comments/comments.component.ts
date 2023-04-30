import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comments } from 'src/app/model/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() commentList: Comments[]|undefined = [];
  @Output() selectedComment = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }


  clickedComment(email:string|undefined): void {
    this.selectedComment.emit(email);
  }
}
