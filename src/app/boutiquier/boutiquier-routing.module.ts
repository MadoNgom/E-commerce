import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoutiquierComponent } from './boutiquier.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableProductComponent } from './components/table-product/table-product.component';
import { ProduitsComponent } from './components/produits/produits.component';
import { AjoutProduitComponent } from './components/ajout-produit/ajout-produit.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CommandeComponent } from '../components/commande/commande.component';

const routes: Routes = [
  {
    path: '',
    component: BoutiquierComponent,
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
        path: 'produits',
        component: ProduitsComponent,
      },
      {
        path: 'ajout-produit',
        component: AjoutProduitComponent,
      },
      {
        path: 'ajout-categories',
        component: CategoriesComponent,
      },

      {
        path: 'table-product',
        component: TableProductComponent,
      },
      {
        path: 'commande-client',
        component: CommandeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoutiquierRoutingModule {}
