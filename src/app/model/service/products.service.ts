import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class productsService{

  private products: Iproducts[] = [
    
    {id:1, name:'Nike Air Max Excee', desc: 'The insole are confortable so you can wear them everyday', price:699.0, image:'../air.png'},
    {id:1, name:'Nike Air Max Excee', desc: 'The insole are confortable so you can wear them everyday', price:699.0, image:'../air.png'},
    {id:1, name:'Nike Air Max Excee', desc: 'The insole are confortable so you can wear them everyday', price:699.0, image:'../air.png'},

  ];
  getProducts():Iproducts[]{
    return this.products;
  }
}