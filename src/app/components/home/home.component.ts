import { Component } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { Observable, of } from 'rxjs';

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
  constructor(private productService: ProductService) {}
  listeProduit$!: Observable<any[]>;
  ngOnInit(): void {
    this.getAllproducts();
  }

  getAllproducts() {
    this.productService.readAll(`products`).subscribe((data: any) => {
      // this.listeProduit = data;
      this.listeProduit$ = of(data.data);
    });
  }
}
