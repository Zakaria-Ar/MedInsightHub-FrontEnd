// demands.service.ts
import { Injectable } from '@angular/core';

enum DemandStatus {
  Pending = "Pending",
  Accepted = "Accepted",
  Rejected = "Rejected",
  Await = "Await"
}

interface User {
  user_id: number;
  username: string;
}

interface Demand {
  demand_id: number;
  user_sender: User;
  user_receiver: User;
  date_sent: Date;
  demand_status: DemandStatus;
}
@Injectable({
  providedIn: 'root'
})
export class DemandsService {
  private demands: Demand[] = [
    {
      demand_id: 1,
      user_sender: { user_id: 2, username: 'JaneDoe' },
      user_receiver: { user_id: 1, username: 'JohnDoe' },
      date_sent: new Date(),
      demand_status: DemandStatus.Pending
    },
    {
      demand_id: 2,
      user_sender: { user_id: 3, username: 'Aouintch' },
      user_receiver: { user_id: 1, username: 'JohnDoe' },
      date_sent: new Date(),
      demand_status: DemandStatus.Pending
    },
    {
      demand_id: 3,
      user_sender: { user_id: 2, username: 'LEMNYA' },
      user_receiver: { user_id: 1, username: 'JohnDoe' },
      date_sent: new Date(),
      demand_status: DemandStatus.Pending
    },
  ];

  constructor() { }

  getDemands(): Demand[] {
    return this.demands;
  }

  acceptDemand(demandId: number) {
    const demand = this.demands.find(d => d.demand_id === demandId);
    if (demand) {
      demand.demand_status = DemandStatus.Accepted;
    }
  }

  rejectDemand(demandId: number) {
    const demand = this.demands.find(d => d.demand_id === demandId);
    if (demand) {
      demand.demand_status = DemandStatus.Rejected;
    }
  }
  awaitDemand(demandId: number) {
    const demand = this.demands.find(d => d.demand_id === demandId);
    if (demand) {
      demand.demand_status = DemandStatus.Await;
    }
  }

  updateDemandStatus(demandId: number, newStatus: DemandStatus): void {
    const demand = this.demands.find(d => d.demand_id === demandId);
    if (demand) {
      demand.demand_status = newStatus;
    }
  }
}

