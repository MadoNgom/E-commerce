import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PagesComponent } from './pages/pages.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { NewUserWrapperComponent } from './components/new-user-wrapper/new-user-wrapper.component';
import { ProfilComponent } from 'src/app/shared/components/profil/profil.component';
import { ProductsComponent } from './pages/products/products.component';
import { GestionCommandeComponent } from './pages/gestion-commande/gestion-commande.component';
import { adminGuard } from 'src/app/core/guards/admin.guard';
import { boutiquierGuard } from 'src/app/core/guards/boutiquier.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'users',
        component: UsersComponent,
        canActivate:[adminGuard]
      }, {
        path: 'profil',
        component: ProfilComponent
      },{
        path: 'products',
        component: ProductsComponent,
        canActivate:[boutiquierGuard]
      },
      {
        path: 'gestion-commande',
        component: GestionCommandeComponent,
        canActivate:[boutiquierGuard]
        }
    ],
  },
];
@NgModule({
  declarations: [
    PagesComponent,
    SidebarComponent,
    TopHeaderComponent,
    UsersComponent,
    NewUserWrapperComponent,
    ProductsComponent,
    GestionCommandeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ]
})
export class AdminPageModule { }