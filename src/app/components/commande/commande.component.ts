import { Component } from '@angular/core';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrl: './commande.component.css',
})
export class CommandeComponent {
  quantity: number = 0;
  showAlert!: boolean;

  incrementQuantity() {
    this.quantity++;
    this.showAlert = true;

    setTimeout(() => (this.showAlert = false), 2000);
  }

  decrementQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }
}
