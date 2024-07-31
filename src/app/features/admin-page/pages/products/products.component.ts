import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = ['Image','Nom produit', 'Prix', 'Catégorie', 'actions'];
  dataSource = [];
  products$!: Observable<any[]>;
  totalProducts: number = 300;
  pageSizeOptions = [5, 10, 20, 50];
  pageSize = 5;
  pageIndex = 1;

  constructor(private productService: ProductService, private dialog: MatDialog) {}

  ngOnInit() {
      this.getAllProducts(this.pageSize, this.pageIndex)
  }

  getAllProducts(limit: number, page: number) {
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
    this.getAllProducts(this.pageSize, this.pageIndex);
  }

  onPageSizeChange(_p: any) {
    this.pageSize = _p.pageSize;
    this.pageIndex = 1;
    this.getAllProducts(this.pageSize, this.pageIndex);
  }
}
