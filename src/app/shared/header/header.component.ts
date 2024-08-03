import { Component } from '@angular/core';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  cartItemCount: number = 0;
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItemCount = items.length;
    });
  }
}
