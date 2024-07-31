import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, map, Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductService } from 'src/app/core/services/product.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent {
  cartItemCount: number = 0;
  isLoggedIn!: boolean;
  dropdownOpen = false;
  sidebarVisible: boolean = false;
  private unsubscribe$ = new Subject<void>();
  userInfo: any;
  panier: any;
  total: any;
  constructor(
    private router: Router,
    private authService: AuthService,
    private cartService: CartService,
    private productService: ProductService,
    private toastService:ToastService
  ) {}

  ngOnInit(): void {
    this.authService.authState$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((loggedIn: boolean) => {
        this.isLoggedIn = loggedIn;
      });

    this.authService.userInfo$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((userInfo) => {
        this.userInfo = userInfo;
      });

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

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  finaliser() {
    const req = this.panier.map((product:any) => 
      this.productService.create(`orders/${product.id}`, {
        quantity: product.quantity,
      }).pipe(
        map(res => ({ id: product.id, success: !!res }))
      )
    );
  
    forkJoin(req).subscribe((results:any) => {
      const all = results.every((result:any) => result.success);
      if (all) {
        this.panier.forEach((product:any) => this.cartService.removeFromCart(product.id));
        this.toastService.show('Votre commande est envoyée avec succés.');
      } else {
        this.toastService.show('Certaines commandes ont échoué.');
      }
    });
  }
  
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
