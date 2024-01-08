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

  constructor() { }

  onSubmit(): void {
    // Simulate a form submission
    console.log('Profile updated:', this.user);
    // In a real app, you would send this update to the backend server
  }
}
