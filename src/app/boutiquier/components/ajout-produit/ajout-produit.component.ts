import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrl: './ajout-produit.component.css',
})
export class AjoutProduitComponent implements OnInit {
  productForm: FormGroup;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      description: ['', Validators.required],
      category: ['', Validators.required],
      images: [null],
    });
  }

  // formData = new FormData();
  // formData.append('name', this.productForm.get('name')?.value);
  // FormData.append('price', this.productForm.get('price')?.value);
  // FormData.append('description', this.productForm.get('description')?.value);
  // FormData.append('category', this.productForm.get('category')?.value);

  creatProduct(item: any) {
    this.productService.create('products', item).subscribe((response) => {
      if (response) {
        console.log('product added ');
      } else {
        console.log('no item added');
      }
    });
  }
}
