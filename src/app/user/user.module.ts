import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ValiderCommandeComponent } from './valider-commande/valider-commande.component';


@NgModule({
  declarations: [
    ValiderCommandeComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [
    ValiderCommandeComponent
  ]
})
export class UserModule { }
