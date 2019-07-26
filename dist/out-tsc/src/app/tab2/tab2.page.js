import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
var Tab2Page = /** @class */ (function () {
    function Tab2Page(productService) {
        this.productService = productService;
    }
    Tab2Page.prototype.verificarDados = function () {
        if (this.productName != null && this.productName != "") {
            return true;
        }
        return false;
    };
    Tab2Page.prototype.incluirProduct = function () {
    };
    Tab2Page.prototype.pesquisaProducts = function () {
        if (this.productName != null && this.productName != "") {
            this.productService.getProduct(this.productName);
        }
        else {
            this.productService.getAllProducts();
        }
    };
    Tab2Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab2',
            templateUrl: 'tab2.page.html',
            styleUrls: ['tab2.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ProductService])
    ], Tab2Page);
    return Tab2Page;
}());
export { Tab2Page };
//# sourceMappingURL=tab2.page.js.map