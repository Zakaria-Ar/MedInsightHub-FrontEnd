// src/app/services/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model'; // Import the User model

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/user'; // Update with your backend URL

  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}`+ '/create', user);
  }
  setToken(token: string){
    localStorage.setItem("token", token);
  }
  getToken(){
    localStorage.getItem("token");
  }
  getUserInfo(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}`,{headers: new HttpHeaders({"Authorization" : "Bearer "+this.getToken() })});
  }

  updateUser(user: User): Observable<any> {
    return this.http.put(`${this.baseUrl}/update`, user);
  }

  // Other methods as needed
}
