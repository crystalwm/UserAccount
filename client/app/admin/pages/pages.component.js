"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PagesComponent = (function () {
    function PagesComponent() {
    }
    return PagesComponent;
}());
PagesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'pages',
        template: "\n        <wm-header></wm-header>\n        <wm-sidebar></wm-sidebar>  \n        <div class=\"main\">\n            <div class=\"content\">\n                 <router-outlet></router-outlet>\n            </div>\n        </div>      \n    ",
        styleUrls: ['./pages.css'],
        encapsulation: core_1.ViewEncapsulation.None
    })
], PagesComponent);
exports.PagesComponent = PagesComponent;
//# sourceMappingURL=E:/Sonicwall/project/Sonicwall_demo/Sonicwall_demo/typescript-angular2-client/app/admin/pages/pages.component.js.map