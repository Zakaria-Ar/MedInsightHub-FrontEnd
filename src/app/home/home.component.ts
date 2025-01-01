import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PostService } from '../services/post.service';
import { homePosts } from '../models/homePosts.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dynamicPosts: homePosts[] = [];
  staticPosts: homePosts[] = [];
  posts: homePosts[] | undefined;

  constructor(
    private router: Router, 
    private authService: AuthService,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    if (this.authService.getToken() == null) {
      this.router.navigate(['/']);
    } else {
      // Fetch dynamic posts
      this.postService.getPosts().subscribe(
        (data: any) => {
          this.dynamicPosts = data.sort((a: homePosts, b: homePosts) => {
            return new Date(b.date_posted).getTime() - new Date(a.date_posted).getTime();
          });

          // Add static posts after dynamic posts are fetched
          this.addStaticPosts();
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

  private addStaticPosts(): void {
    // Create three static post objects
    const staticPost1: homePosts = {
      post_id: 1,
      doctor_firstname: 'Mohamed',
      doctor_lastname: 'AOUNTI',
      title: 'Understanding Blood Analysis Results',
      post_type: 'Discussion',
      post_status: 'Published',
      tags: ['Blood Test', 'Health', 'Diagnosis'],
      views_count: 120,
      likes_count: 5,
      comments_count: 2,
      date_posted: new Date('2024-01-30'),
      liked: false,
      viewed: false
    };

    const staticPost2: homePosts = {
      post_id: 2,
      doctor_firstname: 'Hamid',
      doctor_lastname: 'ALALOU',
      title: 'Healthy Eating Habits',
      post_type: 'Analysis',
      post_status: 'Published',
      tags: ['Nutrition', 'Diet', 'Wellness'],
      views_count: 80,
      likes_count: 10,
      comments_count: 3,
      date_posted: new Date('2024-01-31'),
      liked: false,
      viewed: false
    };
    

    const staticPost3: homePosts = {
      post_id: 3,
      doctor_firstname: 'Oussama',
      doctor_lastname: 'DHAR',
      title: 'Stress Management Techniques',
      post_type: 'Question',
      post_status: 'Published',
      tags: ['Stress Relief', 'Mental Health', 'Relaxation'],
      views_count: 95,
      likes_count: 8,
      comments_count: 4,
      date_posted: new Date('2024-01-31'),
      liked: false,
      viewed: false
    };
    
    // Push the static posts into the staticPosts array
    this.staticPosts.push(staticPost1, staticPost2, staticPost3);

    // Concatenate staticPosts and dynamicPosts into the final posts array
    this.posts = this.staticPosts.concat(this.dynamicPosts);
  }
}
