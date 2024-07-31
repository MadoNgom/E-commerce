import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { PagesComponent } from './pages/pages.component';
import { SharedModule } from 'src/app/shared/shared.module';
import localeFr from '@angular/common/locales/fr';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { authGuard } from 'src/app/core/guards/auth.guard';
import { CanLoginGuard } from 'src/app/core/guards/login.guard';

registerLocaleData(localeFr);
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
        path: '',
        component: HomeComponent,
      },{
        path: 'login',
        component: LoginComponent,
        canActivate: [CanLoginGuard]
      },{
        path: 'register',
        component: RegisterComponent,
      }
    ],
  },
];
@NgModule({
  declarations: [PagesComponent, HomeComponent, LoginComponent, RegisterComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule, SharedModule],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
})
export class HomePageModule {}
