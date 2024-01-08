import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from './models/post.model'; // Update the path as necessary

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor() { }

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
