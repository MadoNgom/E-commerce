import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

import { GestionProduitsComponent } from './components/gestion-produits/gestion-produits.component';
import { GestionUsersComponent } from './components/gestion-users/gestion-users.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AjoutCategoriesComponent } from './components/ajout-categories/ajout-categories.component';
import { AjoutProduitsComponent } from './components/ajout-produits/ajout-produits.component';

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
<<<<<<< HEAD
      {
        path: 'ajout-categories',
        component: AjoutCategoriesComponent,
      },

=======
      // {
      //   path: 'crud-categories',
      //   component: CrudCategoriesComponent,
      // },
>>>>>>> cde5dd908a7c290f034991e5fb3510c7f25eed73
      {
        path: 'gestion-produits',
        component: GestionProduitsComponent,
      },
      {
        path: 'ajout-produits',
        component: AjoutProduitsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
