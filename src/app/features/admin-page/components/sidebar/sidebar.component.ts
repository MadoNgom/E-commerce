import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  dropdownOpen = false;
  userInfo: any;
  private unsubscribe$ = new Subject<void>();
  menuItems: any[] = [];

  private menuConfig: any = {
    admin: [
      {
        label: 'Tableau de bord',
        icon: 'pi pi-chart-pie',
        routerLink: 'dashboard',
      },
      {
        label: 'Gestion des utilisateurs',
        icon: 'pi pi-users',
        routerLink: 'users',
      },
    ],
    boutiquier: [
      {
        label: 'Tableau de bord',
        icon: 'pi pi-chart-pie',
        routerLink: 'dashboard',
      },
      {
        label: 'Gestion des produits',
        icon: 'pi pi-barcode',
        routerLink: 'products',
      },
      {
        label: 'Gestion des commandes',
        icon: 'pi pi-align-justify',
        routerLink: 'gestion-commande',
      },
    ],
  };

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.userInfo$
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((userInfo) => {
      this.userInfo = userInfo;
      this.menuItems = this.menuConfig[this.userInfo?.role] || [];
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
