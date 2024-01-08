// new-message.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent {
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
}
