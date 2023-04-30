import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../model/post';
import { Comments } from '../model/comment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts():Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPostByPostId(postId:number|undefined):Observable<Post> {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/'+postId);
  }

  getCommentsByPostId(postId:number|undefined):Observable<Comments[]>{
    return this.http.get<Comments[]>('https://jsonplaceholder.typicode.com/posts/'+postId+'/comments');
  }
}
