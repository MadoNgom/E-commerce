import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLoggedIn!: boolean;
  dropdownOpen = false;
  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
