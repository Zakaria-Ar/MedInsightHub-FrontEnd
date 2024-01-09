import { Component } from '@angular/core';

enum UserType {
  Doctor,
  Patient
}

enum UserGender {
  Male,
  Female,
  Other
}

interface UserDTO {
  user_id: number;
  firstname: string;
  lastname: string;
  username: string;
  bio: string;
  email: string;
  user_type: UserType;
  registration_date: Date;
  profile_pic_url: string;
  connections_count: number;
  doctor_specialty?: string;
  doctor_years_of_experience?: number;
  patient_date_of_birth?: Date;
  patient_gender?: UserGender;
}

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  // Initialize with mock user data
  user: UserDTO = {
    user_id: 1,
    firstname: 'John',
    lastname: 'Doe',
    username: 'johndoe',
    bio: 'A passionate healthcare professional',
    email: 'johndoe@example.com',
    user_type: UserType.Doctor,
    registration_date: new Date(),
    profile_pic_url: 'path/to/your/profilepic.jpg',
    connections_count: 150,
    doctor_specialty: 'Cardiology',
    doctor_years_of_experience: 10,
    // patient_date_of_birth and patient_gender are not needed for a doctor user type
  };

  selectedFile?: File;
  UserType = UserType;

  constructor() { }

  onSubmit(): void {
    // Handle the file upload to Firebase first, then save the profile
    if (this.selectedFile) {
      // Upload file to Firebase and get the download URL
      // After successful upload, assign the URL to this.user.profile_pic_url
    }
    console.log('Profile updated:', this.user);
    // Send this.user to backend to update the profile
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];
    }
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
