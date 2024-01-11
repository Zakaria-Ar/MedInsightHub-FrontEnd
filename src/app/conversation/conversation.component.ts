import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

interface User {
  user_id: number;
  username: string;
}

interface Message {
  message_id: number;
  user_sender: User;
  user_receiver: User;
  date_sent: Date;
  text_message: string;
}

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  conversationWith: string = ''; // Default empty string
  conversationMessages: Message[] = []; // Use the Message type for your messages
  newMessage: string = '';

  // Mocked user information
  currentUser: User = {
    user_id: 1, // This would be the logged in user's ID
    username: 'JohnDoe', // This would be the logged in user's username
  };

  constructor(private route: ActivatedRoute, private router: Router, private authservice: AuthService) {}

  ngOnInit(): void {
    if (this.authservice.getToken()==null){
      this.router.navigate(['/'])
    }
    // Extract the conversation ID from the URL
    const conversationId = this.route.snapshot.params['id'];

    // Simulate fetching messages for the conversation by filtering a mock data array
    const allMessages: Message[] = [
      // Populate this array with some mock messages
      {
        message_id: 1,
        user_sender: { user_id: 2, username: 'JaneDoe' },
        user_receiver: { user_id: 1, username: 'JohnDoe' },
        date_sent: new Date(),
        text_message: 'Hi John, how are you?',
      },
      // Add other mock messages here
    ];

    this.conversationMessages = allMessages.filter(
      msg => msg.message_id.toString() === conversationId
    );

    // Set the conversationWith property to the name of the user you're conversing with
    // This is a simplification, in reality, you'd determine this from the messages
    if (this.conversationMessages.length > 0) {
      this.conversationWith = this.conversationMessages[0].user_sender.username;
    }
  }

  isSender(msg: Message): boolean {
    // Determine if the current user is the sender of the message
    return msg.user_sender.user_id === this.currentUser.user_id;
  }

  sendMessage(): void {
    if (this.newMessage.trim()) {
      // Mock sending a message by adding it to the local array
      this.conversationMessages.push({
        message_id: Math.max(...this.conversationMessages.map(m => m.message_id)) + 1, // Generate a new ID
        user_sender: this.currentUser,
        user_receiver: { user_id: 2, username: 'JaneDoe' }, // This would be the other user in the conversation
        date_sent: new Date(),
        text_message: this.newMessage,
      });
      this.newMessage = ''; // Clear the input field
    }
  }
}
