import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.url = 'https://nestjs-ecommerce.herokuapp.com/products';
    }
    ProductService.prototype.getAllProducts = function () {
        return this.http.get(this.url);
    };
    ProductService.prototype.getProduct = function (nomeProduto) {
        this.listaProdutos = this.listaProdutos.filter(function (produto) {
            if (produto.productName.toLowerCase().match(nomeProduto.toLowerCase())) {
                return produto;
            }
        });
    };
    ProductService.prototype.postProduct = function (productName, englishName, description, price, quantity, unity) {
    };
    ProductService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ProductService);
    return ProductService;
}());
export { ProductService };
//# sourceMappingURL=product.service.js.map