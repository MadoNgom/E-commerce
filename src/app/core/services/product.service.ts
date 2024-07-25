import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { ToastService } from './toast.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends AbstractService<any> {

  constructor(http: HttpClient, toastService: ToastService) {
    super(http, toastService);
  }

}
