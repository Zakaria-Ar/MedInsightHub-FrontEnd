// connection-requests.component.ts

import { Component, OnInit } from '@angular/core';
import { ConnectionRequestsService } from '../connection-requests.service'; // Update path as necessary


export enum ConnectionStatus {
  Pending = "Pending",
  Accepted = "Accepted",
  Rejected = "Rejected"
}

export interface User {
  user_id: number;
  username: string;
}

export interface Connection {
  connection_id: number;
  user_sender: User;
  user_receiver: User;
  date_sent: Date;
  connection_status: ConnectionStatus;
}


@Component({
  selector: 'app-connection-requests',
  templateUrl: './connection-requests.component.html',
  styleUrls: ['./connection-requests.component.css']
})
export class ConnectionRequestsComponent implements OnInit {
  // Now TypeScript knows what a Connection is
  connectionRequests: Connection[] | undefined ; // Initialize it as an empty array

  constructor(private connectionRequestsService: ConnectionRequestsService) { }

  ngOnInit(): void {
    this.connectionRequests = this.connectionRequestsService.getRequests();
  }

  acceptRequest(connectionId: number): void {
    this.connectionRequestsService.acceptRequest(connectionId);
    // Optionally refresh the list or handle UI updates
  }

  rejectRequest(connectionId: number): void {
    this.connectionRequestsService.rejectRequest(connectionId);
    // Optionally refresh the list or handle UI updates
  }
}
