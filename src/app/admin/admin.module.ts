import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { GestionUsersComponent } from './components/gestion-users/gestion-users.component';
import { GestionProduitsComponent } from './components/gestion-produits/gestion-produits.component';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavComponent } from './components/nav/nav.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
<<<<<<< HEAD
import { AjoutCategoriesComponent } from './components/ajout-categories/ajout-categories.component';
import { AjoutProduitsComponent } from './components/ajout-produits/ajout-produits.component';
=======
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
>>>>>>> cde5dd908a7c290f034991e5fb3510c7f25eed73

@NgModule({
  declarations: [
    GestionUsersComponent,
    GestionProduitsComponent,
    AdminComponent,
    SidebarComponent,
    NavComponent,
    DashboardComponent,
    AjoutCategoriesComponent,
    AjoutProduitsComponent,
  ],
  imports: [CommonModule, AdminRoutingModule],
<<<<<<< HEAD
  exports: [GestionUsersComponent, GestionProduitsComponent],
=======
  exports: [
    GestionUsersComponent,
    GestionProduitsComponent,
  ],
>>>>>>> cde5dd908a7c290f034991e5fb3510c7f25eed73
})
export class AdminModule {}
