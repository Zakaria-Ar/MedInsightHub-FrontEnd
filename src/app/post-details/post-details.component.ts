import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

interface Post {
  post_id: number;
  doctor_firstname: string;
  doctor_lastname: string;
  title: string;
  post_type: string;
  post_status: string;
  tags: string[];
  views_count: number;
  likes_count: number;
  comments_count: number;
  date_posted: Date;
  content: string;
}

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  onLikeClick(): void {
    // Placeholder for future like functionality
  }

  onCommentClick(): void {
    // Placeholder for future comment functionality
  }
  post: Post | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private authservice: AuthService) {}

  ngOnInit(): void {
    if (this.authservice.getToken()==null){
      this.router.navigate(['/'])
    }
    const postId = +this.route.snapshot.params['id'];
    // Temporary mock data, similar to what's in HomeComponent
    const posts: Post[] = [
      {
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
        content: 'Blood tests are fundamental to diagnose and monitor health conditions. A Complete Blood Count (CBC) provides valuable information about your health, such as the levels of red blood cells, which carry oxygen; white blood cells, which fight infection; and platelets, which help with blood clotting. Abnormalities in these counts can indicate various health issues, from infections to anemia. Understanding these results can empower patients to take proactive steps in managing their health.'
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
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus ullamcorper lectus, sed maximus ipsum tempus fringilla. Curabitur tempor id lectus ut vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula faucibus sem, vitae sagittis erat gravida id. Phasellus quis felis elementum, pellentesque metus ac, posuere metus. Nunc feugiat auctor felis. Nulla dignissim finibus lorem, non mollis sapien sagittis eu. Aliquam venenatis erat eu turpis fermentum, nec posuere felis viverra. Nunc id ornare nunc, vel porta nunc. Nunc aliquet, ante vel rhoncus pellentesque, est elit iaculis elit, a tempus nisl sem at quam. Morbi metus justo, aliquam non varius a, convallis at turpis. Etiam tempus euismod placerat. Suspendisse vel bibendum ligula, nec vulputate elit. Duis eros orci, rutrum in eleifend id, bibendum a velit. Sed commodo volutpat mi vitae tristique.'
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
    ];
    
    this.post = posts.find(p => p.post_id === postId);
  }
}
