import { Component } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { Observable, of } from 'rxjs';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  image = [
    '../../../assets/images/carousse1.jpg',
    '../../../assets/images/shop3.jpg',
    '../../../assets/images/shopping 2.jpg',
  ];

  listeProduit$!: Observable<any[]>;
  // definir le nombre de produit
  totalProducts: number = 300;
  // nombre page de produit
  pageSize: number = 8;
  // index de page
  pageIndex: number = 1;

  ngOnInit(): void {
    this.getAll(this.pageSize, this.pageIndex);
  }
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  getAll(limit: number, page: number) {
    this.productService
      .readAllPaginate(`products?limit=${limit}&page=${page}`)
      .subscribe((response) => {
        this.listeProduit$ = of(response.data);
        this.totalProducts = response.total;
      });
  }

  onPageChange(_p: any) {
    this.pageSize = _p.pageSize;
    this.pageIndex = _p.pageIndex + 1;
    this.getAll(this.pageSize, this.pageIndex);
  }

  onPageSizeChange(_p: any) {
    this.pageSize = _p.pageSize;
    this.pageIndex = 1;
    this.getAll(this.pageSize, this.pageIndex);
  }

  mettrePanier(_p: any) {
    this.cartService.addToCart({
      id: _p.id,
      name: _p.name,
      images: _p.images ? _p.images : null,
      category: _p.category?.name,
      price: _p.price,
      quantity: 1,
      vendeur: _p.user.firstname + ' ' + _p.user.lastname,
    });
  }
}
