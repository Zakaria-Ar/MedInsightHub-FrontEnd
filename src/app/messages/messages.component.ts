// messages.component.ts
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service'; // Update the path as necessary

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: any[] = []; // Replace any[] with the proper type if you decide to define it

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messages = this.messageService.getMessages();
  }
}
