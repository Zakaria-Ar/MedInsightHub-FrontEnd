import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent {
  newMessage = {
    recipient: '',
    content: ''
  };

  sendNewMessage(): void {
    // Here you'd normally send data to the backend
    // For now, just log the data to the console
    console.log('Sending message:', this.newMessage);
    this.newMessage = { recipient: '', content: '' }; // Clear the form
  }
  constructor(private router: Router, private authservice: AuthService) {}
  ngOnInit(): void {
    if (this.authservice.getToken()==null){
      this.router.navigate(['/'])
    }
}
}
