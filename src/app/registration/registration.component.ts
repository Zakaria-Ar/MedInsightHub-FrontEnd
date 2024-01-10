// src/app/registration/registration.component.ts
import { Component } from '@angular/core';
import { UserService } from '../services/user.service'; // Adjust the path as necessary
import { User, UserType, UserGender } from '../models/user.model'; // Import the User model and enums

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user: User = new User();
  UserType = UserType; // Expose UserType enum to the template
  UserGender = UserGender; // Expose UserGender enum to the template

  constructor(private userService: UserService) {}

  onSubmit(): void {
    this.userService.registerUser(this.user).subscribe(
      response => {
        console.log('User registered successfully', response);
        // Handle successful registration
      },
      error => {
        console.error('Registration error', error);
        // Handle error
      }
    );
  }
}
