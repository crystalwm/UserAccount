"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SmartTableComponent = (function () {
    function SmartTableComponent() {
        this.settings = {
            columns: {
                id: { title: 'ID' },
                name: { title: 'Full Name' },
                username: { title: 'User Name' },
                email: { title: 'Email' }
            }
        };
        this.data = [
            { id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz" },
            { id: 2, name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv" },
            // ... list of items 
            { id: 11, name: "Nicholas DuBuque", username: "Nicholas.Stanton", email: "Rey.Padberg@rosamond.biz" }
        ];
    }
    return SmartTableComponent;
}());
SmartTableComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './smartTable.html'
    })
], SmartTableComponent);
exports.SmartTableComponent = SmartTableComponent;
//# sourceMappingURL=smartTable.component.js.map