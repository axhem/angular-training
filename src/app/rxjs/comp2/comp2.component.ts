import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  inputText!: string;
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postService.dataEmmiter.subscribe((value)=>{
      this.inputText = value;
    })
  }

}
