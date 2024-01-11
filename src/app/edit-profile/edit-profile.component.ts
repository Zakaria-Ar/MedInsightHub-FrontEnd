// src/app/edit-profile/edit-profile.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { User, UserGender, UserType } from '../models/user.model'; // Assuming you have a User model


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  user: User = new User(); // Initialize with an empty User object
  selectedFile?: File;
  UserType = UserType; // To use UserType enum in the template
  UserGender = UserGender; // To use UserGender enum in the template

  constructor(private userService: UserService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (!this.authService.getToken()) {
      this.router.navigate(['/login']);
    } else {
      // Load user data from backend
      this.userService.getUserInfo().subscribe(
        (userData: any) => {
          this.user = userData;
        },
        error => {
          console.error('Error loading user data:', error);
        }
      );
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit(): void {
    if (this.selectedFile) {
      // Upload file to Firebase and get the download URL
      // After successful upload, assign the URL to this.user.profile_pic_url
    }

    // Update user profile
    this.userService.updateUserProfile(this.user).subscribe(
      response => {
        // Handle successful update
        this.router.navigate(['/profil']); // Redirect to the profile page
      },
      error => {
        console.error('Error updating profile:', error);
      }
    );
  }
}

// This is a simplified example. You need to handle the upload and get the URL.
/* onFileSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length) {
    const file = input.files[0];
    // Create a reference to 'profile_pictures/username.jpg'
    const fileRef = firebase.storage().ref().child(`profile_pictures/${this.user.username}.jpg`);
    const uploadTask = fileRef.put(file);

    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // Handle upload progress
      },
      (error) => {
        // Handle errors
        console.error(error);
      },
      () => {
        // When the upload completes
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          this.user.profile_pic_url = downloadURL;
          // Now you can save the user data with the new profile picture URL
        });
      }
    );
  }
}
*/
