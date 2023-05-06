import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post[] | undefined;
  emri!: string;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPostComponent();
    this.emri = this.postService.getName();
  }

  getPostComponent(): void {
    this.postService.getPosts().subscribe(result => {
      this.post = result;
      console.log(this.post)
    })
  }



}
