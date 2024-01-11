// header.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Output() toggleSidebar = new EventEmitter<void>();

    toggleSd() {
        this.toggleSidebar.emit();
    }
    searchQuery: string = '';

    constructor(private router: Router) {}

    search() {
        this.router.navigate(['/search-results'], { queryParams: { query: this.searchQuery } });
    }
}
