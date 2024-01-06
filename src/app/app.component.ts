import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    sidebarVisible: boolean = true; // La sidebar est visible par défaut

    toggleSd() {
        this.sidebarVisible = !this.sidebarVisible;
    }
}
