// src/app/registration/registration.component.ts
import { Component } from '@angular/core';
// src/app/models/user.dto.ts
enum UserType {
  Doctor,
  Patient
}

enum UserGender {
  Male,
  Female
}

class UserDTO {
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

  constructor() {
    this.user_id = 0;
    this.firstname = '';
    this.lastname = '';
    this.username = '';
    this.bio = '';
    this.email = '';
    this.user_type = UserType.Patient;
    this.registration_date = new Date();
    this.profile_pic_url = '';
    this.connections_count = 0;
  }
}


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user: UserDTO = new UserDTO();
  UserType = UserType; // Expose UserType enum to the template
  UserGender = UserGender; // Expose UserGender enum to the template

  onSubmit(): void {
    console.log('Registration data:', this.user);
    // TODO: Implement registration logic
  }
}
