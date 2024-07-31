import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ButtonSharedComponent } from './components/button-shared/button-shared.component';
import { ProfilComponent } from './components/profil/profil.component';
import { CartComponent } from './components/cart/cart.component';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import {  MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ImageModule } from 'primeng/image';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SidebarModule } from 'primeng/sidebar';

const PRIME_NG_MODULE = [
  BadgeModule,
  ButtonModule,
  CarouselModule,
  TagModule,
  CardModule,
  ConfirmDialogModule,
  ImageModule,
  ToastModule,
  ProgressSpinnerModule,
  SidebarModule
]
const MATERIAL_MODULE = [
  MatSnackBarModule ,
  MatInputModule,
  MatDialogModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatTableModule
]

@NgModule({
  declarations: [
    HeaderComponent,
    ProductItemComponent,
    ButtonSharedComponent,
    ProfilComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ...PRIME_NG_MODULE,
    ...MATERIAL_MODULE
  ],
  exports: [
    HeaderComponent,
    ButtonSharedComponent,
    ProductItemComponent,
    ProfilComponent,
    CartComponent,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ...PRIME_NG_MODULE,
    ...MATERIAL_MODULE
  ]
})
export class SharedModule { }
