import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoutiquierRoutingModule } from './boutiquier-routing.module';
import { TableProductComponent } from './components/table-product/table-product.component';
import { CrudCustomerComponent } from './components/crud-customer/crud-customer.component';
import { CrudProductComponent } from './components/crud-product/crud-product.component';
import { AjoutCategoriesComponent } from './components/ajout-categories/ajout-categories.component';

@NgModule({
  declarations: [
    TableProductComponent,
    CrudCustomerComponent,
    CrudProductComponent,
    AjoutCategoriesComponent,
  ],
  imports: [CommonModule, BoutiquierRoutingModule],
  exports: [TableProductComponent],
})
export class BoutiquierModule {}
