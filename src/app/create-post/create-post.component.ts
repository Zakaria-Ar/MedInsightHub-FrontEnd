import { Component } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  newPost = {
    title: '',
    post_type: '',
    tags: ['zaki']
  };
  tagsInput = '';

  onSubmit(): void {
    // Here you would normally send data to the backend
    // For now, just log the data to the console
    this.newPost.tags = this.tagsInput.split(',').map(tag => tag.trim());
    console.log(this.newPost);
  }
}
