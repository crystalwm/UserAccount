"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mock_menus_1 = require("./mock-menus");
var MenuService = (function () {
    function MenuService() {
    }
    MenuService.prototype.getMenus = function () {
        return Promise.resolve(mock_menus_1.PAGES_MENU);
    };
    return MenuService;
}());
MenuService = __decorate([
    core_1.Injectable()
], MenuService);
exports.MenuService = MenuService;
//# sourceMappingURL=E:/Sonicwall/project/Sonicwall_demo/Sonicwall_demo/typescript-angular2-client/app/admin/theme/components/wmMenu/menu.service.js.map