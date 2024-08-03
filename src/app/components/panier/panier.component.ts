import { Component } from '@angular/core';
import { forkJoin, map, Subject, takeUntil } from 'rxjs';
import { CartService } from '../../core/services/cart.service';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css',
})
export class PanierComponent {
  cartItemCount: number = 0;
  private unsubscribe$ = new Subject<void>();
  panier: any;
  total: any;
  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.cartService.cartItems$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((items) => {
        this.cartItemCount = items.length;
        this.panier = items;
        this.total = this.getTotal();
      });
  }
  getTotal() {
    return this.cartService.getTotalSum();
  }
  supprimer(_p: number) {
    this.cartService.removeFromCart(_p);
    this.total = this.getTotal();
  }

  decrementer(_p: number) {
    this.cartService.decrementer(_p);
    this.total = this.getTotal();
  }

  incrementer(_p: number) {
    this.cartService.incrementer(_p);
    this.total = this.getTotal();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  finaliser() {
    const req = this.panier.map((product: any) =>
      this.productService
        .create(`orders/${product.id}`, {
          quantity: product.quantity,
        })
        .pipe(map((res) => ({ id: product.id, success: !!res })))
    );

    forkJoin(req).subscribe((results: any) => {
      const all = results.every((result: any) => result.success);
      if (all) {
        this.panier.forEach((product: any) =>
          this.cartService.removeFromCart(product.id)
        );
        // this.toastService.show('Votre commande est envoyée avec succés.');
        console.log('votre commande est envoyée avec succés. ');
      } else {
        // this.toastService.show('Certaines commandes ont échoué.');
        console.log('Certaines commandes ont échoué.');
      }
    });
  }
}
