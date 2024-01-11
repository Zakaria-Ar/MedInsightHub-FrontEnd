// message.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages = [
    {
      message_id: 1,
      user_sender: { user_id: 2, username: 'JaneDoe' },
      user_receiver: { user_id: 1, username: 'DahaANA' },
      date_sent: new Date(),
      text_message: 'Hi Meryama, how are you?',
      message_received: true,
      message_received_at: new Date(),
      message_read: false,
      message_read_at: null,
      replies_to_message: false,
      reply_to_message_id: null
    },
    {
      message_id: 2,
      user_sender: { user_id: 4, username: 'AOUINTI' },
      user_receiver: { user_id: 3, username: 'DahaANA' },
      date_sent: new Date(),
      text_message: 'Salam ach kat3awdi?',
      message_received: true,
      message_received_at: new Date(),
      message_read: false,
      message_read_at: null,
      replies_to_message: false,
      reply_to_message_id: null
    },
    {
      message_id: 3,
      user_sender: { user_id: 5, username: 'LEMNYA' },
      user_receiver: { user_id: 6, username: 'DahaANA' },
      date_sent: new Date(),
      text_message: 'wa mrida dyali ch7al hadi machftk?',
      message_received: true,
      message_received_at: new Date(),
      message_read: false,
      message_read_at: null,
      replies_to_message: false,
      reply_to_message_id: null
    },
    // ... more mock messages
  ];

  constructor() { }

  getMessages() {
    return this.messages;
  }
}
