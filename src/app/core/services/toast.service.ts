import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  
  constructor(private matSnackbar:MatSnackBar){}
  
  show(message: string) {
    this.matSnackbar.open(
     message,
      'Fermer', 
      {
        duration:5000,
        panelClass: ['snackbar-error']
      }
    );  
  }
}
