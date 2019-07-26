import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.url = 'https://nestjs-ecommerce.herokuapp.com/users';
    }
    UserService.prototype.getAllUsers = function () {
        var _this = this;
        return this.http.get(this.url).subscribe(function (pessoas) {
            _this.listaPessoas = pessoas;
        });
    };
    UserService.prototype.getUser = function (nome) {
        this.listaPessoas = this.listaPessoas.filter(function (pessoa) {
            if (pessoa.username.toLowerCase().match(nome.toLowerCase())) {
                return pessoa;
            }
        });
    };
    UserService.prototype.postUser = function (nome, senha, ativo) {
    };
    UserService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map