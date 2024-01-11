// create-post.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  newPost = {
    title: '',
    post_type: '',
    tags: [] as string[],
    content: '',
    // Assume that documents will store the URL after uploading to Firebase
    documents: [] as string[] // This will be an array of URLs
  };
  tagsInput = '';
  selectedFiles: FileList | null | undefined;

  onSubmit(): void {
    this.newPost.tags = this.tagsInput.split(',').map(tag => tag.trim());
    // Here you would handle uploading files to Firebase and then saving the post
    console.log(this.newPost);
  }

  onFileSelected(event: Event): void {
    this.selectedFiles = (event.target as HTMLInputElement).files;
    if (this.selectedFiles) {
      // You would upload each selected file to Firebase and retrieve their URLs
      // For now, we'll just log the file names
      Array.from(this.selectedFiles).forEach((file) => {
        console.log(file.name);
        // After uploading to Firebase, push the file URL to the newPost.documents array
        // this.newPost.documents.push(uploadedFileURL);
      });
    }
  }
  constructor(private router: Router, private authservice: AuthService) {}
  ngOnInit(): void {
    if (this.authservice.getToken()==null){
      this.router.navigate(['/'])
    }
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
