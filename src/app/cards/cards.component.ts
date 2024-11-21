import { Component, OnInit } from '@angular/core';
import { productsService } from '../model/service/products.service';
import { CommonModule } from '@angular/common';
import { Iproducts } from '../model/service/iproducts';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  providers: [productsService],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent implements OnInit {
  products: Iproducts[] = [];
  constructor(private productsService: productsService) { }
  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

}
