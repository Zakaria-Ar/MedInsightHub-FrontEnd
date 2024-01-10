// src/app/models/user.model.ts
export enum UserType {
    Doctor,
    Patient
  }
  
  export enum UserGender {
    Male,
    Female,
    Other
  }
  
  export class User {
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
    password: string;
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
      this.password = '';
      this.doctor_years_of_experience = undefined; // or set a default value if necessary
    }
  }
  