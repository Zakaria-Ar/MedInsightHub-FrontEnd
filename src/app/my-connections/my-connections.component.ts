// src/app/my-connections/my-connections.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface ConnectionDTO {
  connection_id: number;
  user_id: number;
  user_username: string;
  user_firstname: string;
  user_lastname: string;
  online: boolean;
}

@Component({
  selector: 'app-my-connections',
  templateUrl: './my-connections.component.html',
  styleUrls: ['./my-connections.component.css']
})
export class MyConnectionsComponent implements OnInit {
  myConnections: ConnectionDTO[] = [
    // Example mock data
    { connection_id: 1, user_id: 2, user_username: 'JaneDoe', user_firstname: 'Jane', user_lastname: 'Doe', online: true },
    { connection_id: 1, user_id: 3, user_username: 'AOUINTCH', user_firstname: 'AOUINTCH', user_lastname: 'MOHAMED', online: false },
    { connection_id: 1, user_id: 4, user_username: 'LEMNYA', user_firstname: 'LEMNYA', user_lastname: 'AYOUB', online: true },
    // ... Add more mock connections as needed
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToConnectionRequests(): void {
    this.router.navigate(['/connection-request']);
  }
}
