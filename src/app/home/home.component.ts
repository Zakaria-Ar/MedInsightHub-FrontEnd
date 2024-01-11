import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PostService } from '../post.service';
import { homePosts } from '../models/homePosts.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: homePosts[] = [];

  constructor(
    private router: Router, 
    private authService: AuthService,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    if (this.authService.getToken() == null) {
      this.router.navigate(['/']);
    } else {
      this.postService.getPosts().subscribe(
        (data: any) => {
          this.posts = data;
        },
        error => {
          console.error('Error fetching posts:', error);
        }
      );
    }
  }

  goToPostDetails(postId: number): void {
    this.router.navigate(['/post-details', postId]);
  }
}
