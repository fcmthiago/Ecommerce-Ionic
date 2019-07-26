import * as tslib_1 from "tslib";
import { UserService } from './../services/user.service';
import { Component } from '@angular/core';
var Tab1Page = /** @class */ (function () {
    function Tab1Page(userService) {
        this.userService = userService;
    }
    Tab1Page.prototype.verificarDados = function () {
        if (this.username != null && this.username != "" && this.password != null && this.password != "") {
            return true;
        }
        return false;
    };
    Tab1Page.prototype.incluirUser = function () {
    };
    Tab1Page.prototype.pesquisaUsers = function () {
        if (this.username != null && this.username != "") {
            this.userService.getUser(this.username);
        }
        else {
            this.userService.getAllUsers();
        }
    };
    Tab1Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab1',
            templateUrl: 'tab1.page.html',
            styleUrls: ['tab1.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [UserService])
    ], Tab1Page);
    return Tab1Page;
}());
export { Tab1Page };
//# sourceMappingURL=tab1.page.js.map