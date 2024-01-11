// create-post.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PostService } from '../post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  newPost = {
    post_id: 1,
    title: '',
    post_type: '',
    tags: [] as string[],
    post_text_content: '',
    documents: [] as string[]
  };
  tagsInput = '';
  selectedFiles: FileList | null | undefined;

  constructor(private postService: PostService, private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    if (!this.authService.getToken()) {
      this.router.navigate(['/login']);
    }
  }

  onSubmit(): void {
    this.newPost.tags = this.tagsInput.split(',').map(tag => tag.trim());

    // Assuming you have a method to handle file upload to Firebase
    this.uploadFilesToFirebase().then(() => {
      this.postService.createPost(this.newPost).subscribe(
        response => {
          console.log('Post created:', response);
          this.router.navigate(['/home']);
          // Redirect or handle response
        },
        error => {
          console.error('Error creating post:', error);
        }
      );
    });
  }

  onFileSelected(event: Event): void {
    this.selectedFiles = (event.target as HTMLInputElement).files;
    // File handling logic here
  }

  uploadFilesToFirebase(): Promise<void> {
    // Implement the logic to upload files to Firebase and get their URLs
    return new Promise((resolve) => {
      // Placeholder logic
      resolve();
    });
  }
}

// Pseudo-code for Firebase upload
/*onFileSelected(event: Event): void {
  this.selectedFiles = (event.target as HTMLInputElement).files;
  if (this.selectedFiles) {
    const file = this.selectedFiles.item(0);
    if (file) {
      const uploadTask = firebase.storage().ref().child('path/to/your/file').put(file);
      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          // handle progress
        },
        (error) => {
          // handle error
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            this.newPost.documents.push(downloadURL);
          });
        }
      );
    }
  }
}
*/
