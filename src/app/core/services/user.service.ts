import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { HttpClient } from '@angular/common/http';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends AbstractService<any> {

  constructor(http: HttpClient, toastService: ToastService) {
    super(http, toastService);
  }

}
