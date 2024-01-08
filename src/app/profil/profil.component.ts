import { Component, OnInit } from '@angular/core';

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
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfileComponent implements OnInit {
  user: UserDTO = {
    user_id: 1,
    firstname: 'John',
    lastname: 'Doe',
    username: 'johndoe',
    bio: 'A passionate healthcare professional',
    email: 'johndoe@example.com',
    user_type: UserType.Doctor,
    registration_date: new Date('2020-01-01T00:00:00'),
    profile_pic_url: 'path/to/image.jpg',
    connections_count: 150,
    doctor_specialty: 'Cardiology',
    doctor_years_of_experience: 10
    // Omit patient fields for doctor user type
  };
  

  constructor() { }

  ngOnInit(): void { }
}
