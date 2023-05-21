import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  enterText!:string;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  btnClick(){
    console.log(this.enterText);
    this.postService.eventkalimTeDhenash(this.enterText);
  }
}
