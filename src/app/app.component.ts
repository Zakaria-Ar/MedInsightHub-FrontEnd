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
      this.showHeaderAndSidebar = !(event.url === '/login' || event.url === '/' || event.url === '/register');
    });
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
