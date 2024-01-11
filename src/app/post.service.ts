import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:8080/post'; // Update with your API URL

  constructor(private http: HttpClient) {}
  getToken(){
    return localStorage.getItem("token");
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl+ "/create/0", post, {headers: new HttpHeaders({"Authorization" : "Bearer "+this.getToken() })});
  }
  getPosts(): Observable<Post[]> {
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    return of(posts);
  }

  getPostById(postId: number): Observable<Post | undefined> {
    const posts: Post[] = JSON.parse(localStorage.getItem('posts') || '[]');
    const post = posts.find(post => post.post_id === postId);
    return of(post);
  }
}
