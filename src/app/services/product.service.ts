import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  url = 'https://nestjs-ecommerce.herokuapp.com/products';
  constructor(private http:HttpClient) { }

  listaProdutos: Product[];

  getAllProducts(){
    return this.http.get<Product[]>(this.url);
  }

  postProduct(newProduct: Product ){
    console.log("Service: "+newProduct.productName);
    return this.http.post<Product>(this.url, newProduct);
  }

  deleteProduct(newProduct: Product ){
    console.log("Service: "+newProduct.productName);
    return this.http.delete(`${this.url}/${newProduct.id}`);
  }
}