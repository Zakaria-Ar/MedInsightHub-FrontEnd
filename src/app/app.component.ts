import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showHeaderAndSidebar: boolean = true;
  title = 'admin-panel-layout';
  sideBarOpen = true;

  constructor(private router: Router) {
    // Subscribe to router events and determine whether to show the header and sidebar
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.showHeaderAndSidebar = (event.url === '/create-post' || event.url === '/home' || event.url === '/messages'|| event.url === '/new-message'|| event.url === '/notifications'|| event.url === '/connection-request'|| event.url === '/cases'|| event.url === '/demandes'|| event.url === '/my-connections'
      || event.url === '/profil'|| event.url.startsWith('/conversation') || event.url === '/edit-profile'|| event.url.startsWith('/post-details') );
    });
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
