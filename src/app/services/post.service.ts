import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:8080/post'; // Update with your API URL

  constructor(private http: HttpClient) {}

  private getToken() {
    return localStorage.getItem("token");
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl + "/create/0", post, {
      headers: new HttpHeaders({"Authorization": "Bearer " + this.getToken()})
    });
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl+"/all", {
      headers: new HttpHeaders({"Authorization": "Bearer " + this.getToken()})
    });
  }

  getPostById(postId: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${postId}`, {
      headers: new HttpHeaders({"Authorization": "Bearer " + this.getToken()})
    });
  }
  getMyPosts(): Observable<any[]> { // replace 'any[]' with the appropriate type
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.getToken() });
    return this.http.get<any[]>(`${this.apiUrl}/my-posts`, { headers });
  }
  
}
