import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrl: './detail-produit.component.css',
})
export class DetailProduitComponent implements OnInit {
  quantity: number = 0;
  showAlert!: boolean;
  idproduit: any;
  produit: any;
  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.idproduit = id;
      this.productService
        .read(id)
        .subscribe((produit) => (this.produit = produit));
    });
  }

  incrementQuantity() {
    this.quantity++;
    this.showAlert = true;

    setTimeout(() => (this.showAlert = false), 2000);
  }

  decrementQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }
}
