import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  products$!: Observable<any[]>;
  totalProducts: number = 300;
  pageSize: number = 8;
  pageIndex: number = 1;
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getAll(this.pageSize, this.pageIndex);
  }

  getAll(limit: number, page: number) {
    this.productService
      .readAllPaginate(`products?limit=${limit}&page=${page}`)
      .subscribe((response) => {
        this.products$ = of(response.data);
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
      images: _p.images ? _p.images:null,
      category:_p.category?.name,
      price: _p.price,
      quantity: 1,
    });
  }

  
}
