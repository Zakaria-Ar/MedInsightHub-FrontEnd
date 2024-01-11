import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {
  posts: any[] = []; // replace 'any' with your Post model

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getMyPosts().subscribe(
      data => this.posts = data,
      error => console.error('Error fetching posts:', error)
    );
  }
}
