import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommandeComponent } from './components/commande/commande.component';

import { PanierComponent } from './components/panier/panier.component';
import { DetailProduitComponent } from './components/detail-produit/detail-produit.component';
import { HomeComponent } from './components/home/home.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { BoutiqueComponent } from './components/boutique/boutique.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'produit/:id', component: DetailProduitComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'commande', component: CommandeComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'found', component: NotFoundComponent },
  { path: 'boutique', component: BoutiqueComponent },
  { path: '**', redirectTo: '' },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'boutiquier',
    loadChildren: () =>
      import('./boutiquier/boutiquier.module').then((m) => m.BoutiquierModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
