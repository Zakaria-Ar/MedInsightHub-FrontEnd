// connection-requests.component.ts

import { Component, OnInit } from '@angular/core';
import { DemandsService } from '../demands.service'; // Update path as necessary


export enum DemandStatus {
  Pending = "Pending",
  Accepted = "Accepted",
  Rejected = "Rejected",
  Await = "Await"
}

export interface User {
  user_id: number;
  username: string;
}

export interface Demand {
  demand_id: number;
  user_sender: User;
  user_receiver: User;
  date_sent: Date;
  demand_status: DemandStatus;
  documentUrl?: string; // Optional document URL
}
@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.css']
})
export class DemandesComponent implements OnInit {
  // Now TypeScript knows what a Connection is
  demandRequests: Demand[] | undefined ; // Initialize it as an empty array

  constructor(private demandsService: DemandsService)  { }

  ngOnInit(): void {
    // Initialize connectionRequests with an empty array or fetch from a service
    this.demandRequests = this.demandsService.getDemands();
  }

  acceptRequest(demandId: number): void {
    // Update the request's status to Accepted and handle the document URL
    this.demandsService.updateDemandStatus(demandId, DemandStatus.Accepted);
    // Refresh the list or handle UI updates
  }

  rejectRequest(demandId: number): void {
    // Update the request's status to Rejected
    this.demandsService.updateDemandStatus(demandId, DemandStatus.Rejected);
    // Refresh the list or handle UI updates
  }

  setToAwait(demandId: number): void {
    // Update the request's status to Pending
    this.demandsService.updateDemandStatus(demandId, DemandStatus.Await);
    // Refresh the list or handle UI updates
  }
}