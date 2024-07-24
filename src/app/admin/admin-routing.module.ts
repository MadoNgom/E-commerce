import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

import { CrudCategoriesComponent } from './components/crud-categories/crud-categories.component';
import { GestionProduitsComponent } from './components/gestion-produits/gestion-produits.component';
import { GestionUsersComponent } from './components/gestion-users/gestion-users.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'crud-categories',
        component: CrudCategoriesComponent,
      },
      {
        path: 'gestion-produits',
        component: GestionProduitsComponent,
      },
      {
        path: 'gestion-users',
        component: GestionUsersComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
