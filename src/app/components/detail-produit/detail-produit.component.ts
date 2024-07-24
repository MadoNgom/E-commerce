import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrl: './detail-produit.component.css',
})
export class DetailProduitComponent {
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
