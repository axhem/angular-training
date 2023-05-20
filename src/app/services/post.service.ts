import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../model/post';
import { Comments } from '../model/comment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getPosts():Observable<Post[]> {
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPostByPostId(postId:number|undefined):Observable<Post> {
    return this.httpClient.get<Post>('https://jsonplaceholder.typicode.com/posts/'+postId);
  }

  getCommentsByPostId(postId:number|undefined):Observable<Comments[]>{
    return this.httpClient.get<Comments[]>('https://jsonplaceholder.typicode.com/posts/'+postId+'/comments');
  }

  deletePostById(postId:number):Observable<any>{
    return this.httpClient.delete<any>('https://jsonplaceholder.typicode.com/posts/'+ postId);
  }

  addPost(post:Post):Observable<Post> {
    return this.httpClient.post<Post>('https://jsonplaceholder.typicode.com/posts', post);
  }

  updatePost(post: Post,postId:number): Observable<Post>{
    return this.httpClient.put<Post>('https://jsonplaceholder.typicode.com/posts/'+ postId, post);
  }

  getName(){
    return 'My name is JOhn Doe';
  }

}
