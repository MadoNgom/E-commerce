import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductService } from '../../../core/services/product.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrl: './commande.component.css',
})
export class CommandeComponent {
  displayedColumns: string[] = [
    'Image',
    'Nom produit',
    'Client',
    'Quantité',
    'Prix unitaire',
    'Statut',
    'actions',
  ];
  dataSource = [];
  orders$!: Observable<any[]>;
  totalOrders: number = 0;
  pageSizeOptions = [5, 10, 20, 50];
  pageSize = 5;
  pageIndex = 1;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getAllOrders(this.pageSize, this.pageIndex);
  }

  getAllOrders(limit: number, page: number) {
    this.productService
      .readAllPaginate(`orders?limit=${limit}&page=${page}`)
      .subscribe((response) => {
        this.orders$ = of(response.data);
        this.totalOrders = response.total;
      });
  }

  onPageChange(_p: any) {
    this.pageSize = _p.pageSize;
    this.pageIndex = _p.pageIndex + 1;
    this.getAllOrders(this.pageSize, this.pageIndex);
  }

  onPageSizeChange(_p: any) {
    this.pageSize = _p.pageSize;
    this.pageIndex = 1;
    this.getAllOrders(this.pageSize, this.pageIndex);
  }
}
