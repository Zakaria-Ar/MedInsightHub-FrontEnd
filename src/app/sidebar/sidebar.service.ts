import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private sidebarVisible = new BehaviorSubject<boolean>(false);

  // Observable que les composants peuvent souscrire
  public sidebarVisible$ = this.sidebarVisible.asObservable();

  constructor() { }

  // Méthode pour basculer l'état de la sidebar
  toggleSidebar() {
    this.sidebarVisible.next(!this.sidebarVisible.value);
  }
}
