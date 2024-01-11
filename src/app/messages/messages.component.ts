// messages.component.ts
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service'; // Update the path as necessary
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: any[] = []; // Replace any[] with the proper type if you decide to define it

  selectMessage(messageId: number): void {
    // You can add any specific logic you need when a message is selected
    // For now, it just navigates to the conversation view
    this.router.navigate(['/conversation', messageId]);
  }

  constructor(private messageService: MessageService, private router : Router, private authservice: AuthService) { }

  ngOnInit(): void {
    if (this.authservice.getToken()==null){
      this.router.navigate(['/'])
    }
    this.messages = this.messageService.getMessages();
  }
}
