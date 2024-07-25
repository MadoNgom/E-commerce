import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { GestionUsersComponent } from './components/gestion-users/gestion-users.component';
import { GestionProduitsComponent } from './components/gestion-produits/gestion-produits.component';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavComponent } from './components/nav/nav.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    GestionUsersComponent,
    GestionProduitsComponent,
    AdminComponent,
    SidebarComponent,
    NavComponent,
    DashboardComponent,
  ],
  imports: [CommonModule, AdminRoutingModule],
  exports: [
    GestionUsersComponent,
    GestionProduitsComponent,
  ],
})
export class AdminModule {}
