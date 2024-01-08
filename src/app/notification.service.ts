// notification.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifications: Notification[] = [
    // ... Insert mock notifications here
  ];

  constructor() { }

  getNotifications(): Notification[] {
    return this.notifications;
  }
}
