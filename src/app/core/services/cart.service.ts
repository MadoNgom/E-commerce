import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { ToastService } from './toast.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItems.asObservable();

  constructor() {
    const items = localStorage.getItem('panier');
    if (items) {
      this.cartItems.next(JSON.parse(items));
    }
  }

  addToCart(product: {
    id: number;
    name: string;
    images: string[];
    category: string;
    price: number;
    quantity: number;
    vendeur: string;
  }) {
    const currentItems = this.cartItems.value;
    const existe = currentItems.findIndex((item) => item.id === product.id);

    if (existe >= 0) {
      currentItems[existe].quantity += product.quantity;
    } else {
      currentItems.push(product);
    }

    this.updateCart(currentItems);
    console.log('product updated successfully');

    // this.matSnackbar.open('Produit ajouté avec succès au panier', 'Fermer', {
    //   duration: 5000,
    //   panelClass: ['snackbar-success'],
    // });
  }

  incrementer(productId: number) {
    const currentItems = this.cartItems.value;
    const existe = currentItems.findIndex((item) => item.id === productId);

    if (existe >= 0) {
      currentItems[existe].quantity += 1;
      this.updateCart(currentItems);
    }
  }

  decrementer(productId: number) {
    const currentItems = this.cartItems.value;
    const existe = currentItems.findIndex((item) => item.id === productId);

    if (existe >= 0) {
      const updatedItem = currentItems[existe];
      if (updatedItem.quantity > 1) {
        updatedItem.quantity -= 1;
        this.updateCart(currentItems);
      } else {
        this.removeFromCart(productId);
      }
    }
  }

  removeFromCart(productId: number) {
    const currentItems = this.cartItems.value.filter(
      (item) => item.id !== productId
    );
    this.updateCart(currentItems);
    console.log('produit retiré avec success');

    // this.matSnackbar.open('Produit retiré du panier', 'Fermer', {
    //   duration: 5000,
    //   panelClass: ['snackbar-success'],
    // });
  }

  getCartItems() {
    return this.cartItems.value;
  }

  getTotalSum() {
    return this.cartItems.value.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  private updateCart(items: CartItem[]) {
    this.cartItems.next(items);
    localStorage.setItem('panier', JSON.stringify(items));
  }
}
