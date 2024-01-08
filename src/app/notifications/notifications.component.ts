import { Component, OnInit } from '@angular/core';

enum NotificationType {
    NewConnection = "New Connection Request",
    ConnectionAccepted = "Connection Accepted",
    NewDemand = "New Demand Request",
    DemandAwait = "DemandAwait",
    DemandApproved = "DemandApproved",
    DemandRefused = "DemandRefused",
    CaseCreated = "CaseCreated",
    CaseInProgress = "CaseInProgress",
    CaseModified = "CaseModified",
    CaseResolved = "CaseResolved",
    CaseDeleted = "CaseDeleted",
    MessageSent = "MessageSent",
    MessageReceived = "MessageReceived",
    MessageRead = "MessageRead",
    NewComment = "NewComment",
    NewReply = "NewReply",
    NewLike = "NewLike"
}

interface User {
  user_id: number;
  username: string;
}

interface Notification {
  notification_id: number;
  user_to_notify: User;
  user_notif_reason: User;
  notifying_item_id: number;
  notification_type: NotificationType;
}

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  currentUser: User = {
    user_id: 1,
    username: 'CurrentUserName',
  };
  notifications: Notification[] = [
    {
      notification_id: 1,
      user_to_notify: this.currentUser,
      user_notif_reason: { user_id: 2, username: 'JaneDoe' },
      notifying_item_id: 1234,
      notification_type: NotificationType.NewConnection
    },
    {
      notification_id: 2,
      user_to_notify: this.currentUser,
      user_notif_reason: { user_id: 3, username: 'Aouintch' },
      notifying_item_id: 1235,
      notification_type: NotificationType.NewComment
    },
    {
      notification_id: 3,
      user_to_notify: this.currentUser,
      user_notif_reason: { user_id: 4, username: 'LEMNYA' },
      notifying_item_id: 1236,
      notification_type: NotificationType.DemandAwait
    },
    // Add more mock notifications as needed
  ];
  ngOnInit(): void {
    // You might want to initialize your notifications here
    // If you were fetching from a service, you would call it here
  }
}
