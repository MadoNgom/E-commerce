import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { ToastService } from './toast.service';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends AbstractService<any> {

  constructor(http: HttpClient, matSnackbar: MatSnackBar) {
    super(http, matSnackbar);
  }
}