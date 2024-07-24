import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  images = [
    '../../../assets/images/carousse1.jpg',
    '../../../assets/images/shop3.jpg',
    '../../../assets/images/shopping 2.jpg',
  ];
}
