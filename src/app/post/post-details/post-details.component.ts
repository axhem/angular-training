import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Comments } from 'src/app/model/comment';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetails: Post | undefined;
  postId: number | undefined;
  comments: Comments[] | undefined = [];
  emailFromChild: string = '';
  emri: string = 'Axhem Shahaj';
  today = new Date();
  angular: string = 'Angular'
  message: string = 'Ky esht enje paragraf';
  constructor(
    private postService: PostService,
    private route: ActivatedRoute) {
      
      this.route.params.subscribe(params => {
        this.postId = params['id'];
        console.log(this.postId);
      });
  }

  ngOnInit(): void {

    this.getPostDetails();
    this.getCommentsByPostId();
  }

  ngAfterViewInit(): void {
    // 
    
  }

  getPostDetails(): void {
    this.postService.getPostByPostId(this.postId).subscribe(rezultati => {
      this.postDetails = rezultati;
    });
  }

  getCommentsByPostId(): void {
    this.postService.getCommentsByPostId(this.postId).subscribe(rezultatiQePresim => {
      this.comments = rezultatiQePresim;
    })
  }

  shfaqEmailin(email: string) {
    this.emailFromChild = email;
  }


}
