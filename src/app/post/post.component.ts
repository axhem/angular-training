import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { PostService } from '../services/post.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {

  posts: Post[] | undefined;
  emri!: string;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPostComponent();
    this.emri = this.postService.getName();
  }

  

  getPostComponent(): void {
    this.postService.getPosts().subscribe(result => {
      this.posts = result;
    })
  }


  fshiPostimet(i:number,id:number):void {
    this.posts?.splice(i,1);
    swal.fire('Thank you...', 'You deleted succesfully!', 'success')
  }

}
