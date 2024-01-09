// connection-requests.service.ts
import { Injectable } from '@angular/core';

enum ConnectionStatus {
  Pending = "Pending",
  Accepted = "Accepted",
  Rejected = "Rejected"
}

interface User {
  user_id: number;
  username: string;
}

interface Connection {
  connection_id: number;
  user_sender: User;
  user_receiver: User;
  date_sent: Date;
  connection_status: ConnectionStatus;
}

@Injectable({
  providedIn: 'root'
})
export class ConnectionRequestsService {
  private connectionRequests: Connection[] = [
    // Your mock connection requests
    {
      connection_id: 1,
      user_sender: { user_id: 2, username: 'JaneDoe' },
      user_receiver: { user_id: 1, username: 'JohnDoe' },
      date_sent: new Date(),
      connection_status: ConnectionStatus.Pending
    },
    {
      connection_id: 2,
      user_sender: { user_id: 3, username: 'Aouintch' },
      user_receiver: { user_id: 1, username: 'JohnDoe' },
      date_sent: new Date(),
      connection_status: ConnectionStatus.Pending
    },
    {
      connection_id: 3,
      user_sender: { user_id: 2, username: 'LEMNYA' },
      user_receiver: { user_id: 1, username: 'JohnDoe' },
      date_sent: new Date(),
      connection_status: ConnectionStatus.Pending
    },
    // ... more mock data
  ];

  constructor() { }

  getRequests(): Connection[] {
    return this.connectionRequests;
  }

  acceptRequest(connectionId: number) {
    const request = this.connectionRequests.find(req => req.connection_id === connectionId);
    if (request) {
      request.connection_status = ConnectionStatus.Accepted;
    }
  }

  rejectRequest(connectionId: number) {
    const request = this.connectionRequests.find(req => req.connection_id === connectionId);
    if (request) {
      request.connection_status = ConnectionStatus.Rejected;
    }
  }
}
