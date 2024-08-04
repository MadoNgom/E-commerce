import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductService } from '../../../core/services/product.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css',
})
export class ProduitsComponent {
  displayedColumns: string[] = [
    'Image',
    'Nom produit',
    'Prix',
    'Catégorie',
    'actions',
  ];
  dataSource = [];
  products$!: Observable<any[]>;
  totalProducts: number = 300;
  pageSizeOptions = [5, 10, 20, 50];
  pageSize = 5;
  pageIndex = 1;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getAllProducts(this.pageSize, this.pageIndex);
  }

  getAllProducts(limit: number, page: number) {
    this.productService
      .readAllPaginate(`products?limit=${limit}&page=${page}`)
      .subscribe((response: any) => {
        this.products$ = of(response.data);
        this.totalProducts = response.total;
      });
  }

  onPageChange(_p: any) {
    this.pageSize = _p.pageSize;
    this.pageIndex = _p.pageIndex + 1;
    this.getAllProducts(this.pageSize, this.pageIndex);
  }

  onPageSizeChange(_p: any) {
    this.pageSize = _p.pageSize;
    this.pageIndex = 1;
    this.getAllProducts(this.pageSize, this.pageIndex);
  }
}
