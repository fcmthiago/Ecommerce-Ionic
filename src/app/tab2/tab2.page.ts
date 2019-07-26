import { Component, ChangeDetectorRef } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private productService: ProductService, private cd: ChangeDetectorRef) { }

  id: number;
  productName: string;
  englishName: string;
  description: string;
  price: number;
  quantity: number;
  unity: string;
  listaProdutos: Product[];
  produtosPesquisados: Product[];
  newProduct: Product;

  incluirProduct(){
    this.newProduct = new Product();
    this.newProduct.id = this.id;
    this.newProduct.productName = this.productName;
    this.newProduct.englishName = this.englishName;
    this.newProduct.description = this.description;
    this.newProduct.price = this.price;
    this.newProduct.quantity = this.quantity;
    this.newProduct.unity = this.unity;
    console.log(this.newProduct.productName);
    this.productService.postProduct(this.newProduct).subscribe(usr => {
      console.log("Foi");
    });
  }

  verificarDados() {
    if (this.productName != null && this.productName != "") {
      return true;
    }
    return false;
  }

  pesquisaProducts() {
    this.productService.getAllProducts().subscribe(produtos => {
      this.listaProdutos = produtos;
      
      if (this.productName != null && this.productName != "") {
        this.produtosPesquisados = this.listaProdutos.filter((produto) => {
          if (produto.productName != null && produto.productName.toLowerCase().match(this.productName.toLowerCase())) {
            return produto;
          }
        })
      }
      else {
        this.produtosPesquisados = this.listaProdutos;
      }
      this.cd.detectChanges();
    });
  }
}
