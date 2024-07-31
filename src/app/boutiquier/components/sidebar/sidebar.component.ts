import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { MENU_ITEMS } from './menu-items';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  currentUser: any;
  menuItems: any[] = MENU_ITEMS;

  constructor(private authService: AuthService) {
    this.currentUser = this.authService.getUserInfo();
  }

  hasRole(roles?: string[]): boolean {
    return roles ? roles.includes(this.currentUser?.type) : true;
  }
  // TO LOGOUT THE PAGE
  handleItemClick(item: any): void {
    if (item.clickHandler === 'logout') {
      this.authService.logout();
    }
  }
}
