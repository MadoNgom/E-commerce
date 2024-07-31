import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

import { GestionProduitsComponent } from './components/gestion-produits/gestion-produits.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';

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
