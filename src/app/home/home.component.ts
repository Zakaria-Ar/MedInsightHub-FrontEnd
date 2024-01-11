import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

interface Post {
  post_id: number;
  doctor_firstname: string;
  doctor_lastname: string;
  title: string;
  post_type: string; // Assuming you have corresponding types
  post_status: string; // Assuming you have corresponding statuses
  tags: string[];
  views_count: number;
  likes_count: number;
  comments_count: number;
  date_posted: Date;
  content: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Post[] = [
    {
      post_id: 1,
      doctor_firstname: 'Emma',
      doctor_lastname: 'Brown',
      title: 'Latest Advances in Cardiology',
      post_type: 'Research',
      post_status: 'Published',
      tags: ['Heart', 'Cardiology', 'Health'],
      views_count: 150,
      likes_count: 75,
      comments_count: 12,
      date_posted: new Date('2024-01-15'),
      content: 'An in-depth look at the latest research in cardiology...'
    },
    {
      post_id: 2,
      doctor_firstname: 'James',
      doctor_lastname: 'Wilson',
      title: 'Understanding Diabetes and Lifestyle Changes',
      post_type: 'Article',
      post_status: 'Published',
      tags: ['Diabetes', 'Lifestyle', 'Nutrition'],
      views_count: 200,
      likes_count: 115,
      comments_count: 30,
      date_posted: new Date('2024-01-10'),
      content: 'A comprehensive guide to managing diabetes through lifestyle adjustments...'
    },
    {
      post_id: 3,
      doctor_firstname: 'James',
      doctor_lastname: 'Wilson',
      title: 'Understanding Diabetes and Lifestyle Changes',
      post_type: 'Article',
      post_status: 'Published',
      tags: ['Diabetes', 'Lifestyle', 'Nutrition'],
      views_count: 200,
      likes_count: 115,
      comments_count: 30,
      date_posted: new Date('2024-01-10'),
      content: 'A comprehensive guide to managing diabetes through lifestyle adjustments...'
    }
    // Add more posts as needed
  ];

  constructor(private router: Router, private authservice: AuthService) { }

  goToPostDetails(postId: number): void {
    this.router.navigate(['/post-details', postId]);
  }

  ngOnInit(): void {
    if (this.authservice.getToken()==null){
      this.router.navigate(['/'])
    }
   }
}
