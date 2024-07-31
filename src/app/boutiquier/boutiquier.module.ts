import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoutiquierRoutingModule } from './boutiquier-routing.module';
import { TableProductComponent } from './components/table-product/table-product.component';

import { AjoutCategoriesComponent } from './components/ajout-categories/ajout-categories.component';
import { BoutiquierComponent } from './boutiquier.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommandeComponent } from './components/commande/commande.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProduitsComponent } from './components/produits/produits.component';
import { AjoutProduitComponent } from './components/ajout-produit/ajout-produit.component';

@NgModule({
  declarations: [
    TableProductComponent,
    AjoutCategoriesComponent,
    BoutiquierComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    CommandeComponent,
    CategoriesComponent,
    ProduitsComponent,
    AjoutProduitComponent,
  ],
  imports: [CommonModule, BoutiquierRoutingModule],
  exports: [TableProductComponent],
})
export class BoutiquierModule {}
