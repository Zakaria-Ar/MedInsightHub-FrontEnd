// message.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages = [
    {
      message_id: 1,
      user_sender: { user_id: 1, username: 'JaneDoe' },
      user_receiver: { user_id: 2, username: 'Johwwi' },
      date_sent: new Date(),
      text_message: 'Hello, I have a medical question.',
      message_received: true,
      message_received_at: new Date(),
      message_read: false,
      message_read_at: null,
      replies_to_message: false,
      reply_to_message_id: null
    },
    {
      message_id: 2,
      user_sender: { user_id: 3, username: 'aounti21' },
      user_receiver: { user_id: 4, username: 'Johwwi' },
      date_sent: new Date(),
      text_message: 'Hi there, I need some medical advice.',
      message_received: true,
      message_received_at: new Date(),
      message_read: false,
      message_read_at: null,
      replies_to_message: false,
      reply_to_message_id: null
    },
    {
      message_id: 3,
      user_sender: { user_id: 6, username: 'mrida789' },
      user_receiver: { user_id: 5, username: 'Johwwi' },
      date_sent: new Date(),
      text_message: 'Hello, I\'m experiencing some health issues.',
      message_received: true,
      message_received_at: new Date(),
      message_read: false,
      message_read_at: null,
      replies_to_message: false,
      reply_to_message_id: null
    }
    ,
    // ... more mock messages
  ];

  constructor() { }

  getMessages() {
    return this.messages;
  }
}
