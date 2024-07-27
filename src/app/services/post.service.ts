import { Post } from './../models/Post';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommentsPost } from '../models/Comment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  todosUrl: string = 'https://jsonplaceholder.typicode.com/posts';
  commentUrl: string = 'https://jsonplaceholder.typicode.com/posts/1/comments';

  constructor(private http: HttpClient) { }



  // Get Todos
  getPostComment(): Observable<CommentsPost[]> {
    return this.http.get<CommentsPost[]>(`${this.commentUrl}`);
  }

  addPostComment(data: Post): Observable<Post> {
    const url = `${this.todosUrl}`;
    return this.http.post<Post>(url, data, httpOptions);
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.todosUrl}`);
  }


  addPost(data: Post): Observable<Post> {
    const url = `${this.todosUrl}`;
    return this.http.post<Post>(url, data, httpOptions);
  }
  updatePost(data: Post): Observable<Post> {
    const url = `${this.todosUrl}/${data.id}`;
    return this.http.patch<Post>(url, data, httpOptions);
  }
  deletePost(id: number): Observable<Post> {
    const url = `${this.todosUrl}/${id}`;
    return this.http.delete<Post>(url, httpOptions);
  }


}
