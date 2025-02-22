import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// MODULES
import { AppRoutingModule } from './app-routing.module';
import { BoutiquierModule } from './boutiquier/boutiquier.module';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
// components
import { AppComponent } from './app.component';
import { ListesProduitsComponent } from './components/listes-produits/listes-produits.component';
import { PanierComponent } from './components/panier/panier.component';
import { CommandeComponent } from './components/commande/commande.component';
import { DetailProduitComponent } from './components/detail-produit/detail-produit.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BoutiqueComponent } from './components/boutique/boutique.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TokenInterceptor } from './core/interceptor/token.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ListesProduitsComponent,
    PanierComponent,
    CommandeComponent,
    DetailProduitComponent,
    ConnexionComponent,
    InscriptionComponent,
    HomeComponent,
    CarouselComponent,
    BoutiqueComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    BoutiquierModule,
    UserModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
