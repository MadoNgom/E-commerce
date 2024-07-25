import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-listes-produits',
  templateUrl: './listes-produits.component.html',
  styleUrl: './listes-produits.component.css'
})
export class ListesProduitsComponent implements OnInit {

  constructor(private productService:ProductService){}

  ngOnInit(): void {
    this.getAllproducts()
  }

  getAllproducts(){
    this.productService.readAll(`products`).subscribe(data => {
      console.log(data);
    })
  }
}
