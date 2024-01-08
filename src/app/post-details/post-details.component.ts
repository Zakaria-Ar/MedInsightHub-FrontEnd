import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const postId = +this.route.snapshot.params['id'];
    // Temporary mock data, similar to what's in HomeComponent
    const posts: Post[] = [
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
