"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var WmMenuComponent = (function () {
    function WmMenuComponent() {
        this.sidebarCollapsed = false;
        this.menuItemForm = { expanded: false };
        this.menuItemTable = { expanded: false };
        this.menuItemChart = { expanded: false };
    }
    WmMenuComponent.prototype.onHoverItem = function ($event) {
    };
    WmMenuComponent.prototype.toggleMenu = function ($event, menuItem) {
        var $submenu = jQuery($event.currentTarget).next();
        $event.preventDefault();
        if (this.sidebarCollapsed) {
        }
        else {
            //submenu.slideToggle();
            menuItem.expanded = !menuItem.expanded;
            $submenu.toggle();
        }
        return false;
    };
    WmMenuComponent.prototype.toggleSubMenu = function ($event) {
        var menu = jQuery($event.currentTarget);
        var $lis = jQuery('.sidebar-list li');
        // $lis.each(element => {
        //     if(jQuery(element).hasClass('selected')){
        //         jQuery(element).removeClass('selected');
        //     }
        // });
        for (var i = 0; i < $lis.length; i++) {
            if (jQuery($lis[i]).hasClass('selected')) {
                jQuery($lis[i]).removeClass('selected');
            }
        }
        menu.parent().addClass('selected');
    };
    return WmMenuComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WmMenuComponent.prototype, "sidebarCollapsed", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], WmMenuComponent.prototype, "menuItemForm", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], WmMenuComponent.prototype, "menuItemTable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], WmMenuComponent.prototype, "menuItemChart", void 0);
WmMenuComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'wm-menu',
        templateUrl: './wmMenu.html',
        styleUrls: ['./wmMenu.css']
    })
], WmMenuComponent);
exports.WmMenuComponent = WmMenuComponent;
//# sourceMappingURL=wmMenu.component.js.map