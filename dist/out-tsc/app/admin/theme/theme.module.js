var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WmHeaderComponent } from './components/wmHeader/wmHeader.component';
import { WmSidebarComponent } from './components/wmSidebar/wmSidebar.component';
import { WmCardComponent } from './components/wmCard/wmCard.component';
import { WmMenuComponent } from './components/wmMenu/wmMenu.component';
import { WmChartistComponent } from './components/wmChartist/wmChartist.component';
//provider
import { MenuService } from './components/wmMenu/menu.service';
var ThemeModule = (function () {
    function ThemeModule() {
    }
    return ThemeModule;
}());
ThemeModule = __decorate([
    NgModule({
        imports: [RouterModule, CommonModule],
        declarations: [
            WmHeaderComponent, WmSidebarComponent,
            WmCardComponent, WmMenuComponent,
            WmChartistComponent
        ],
        providers: [MenuService],
        exports: [
            WmHeaderComponent, WmSidebarComponent,
            WmCardComponent, WmMenuComponent,
            WmChartistComponent
        ]
    })
], ThemeModule);
export { ThemeModule };
//# sourceMappingURL=E:/Sonicwall/project/Sonicwall_demo/Sonicwall_demo/typescript-angular2-client/app/admin/theme/theme.module.js.map