import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { WmHeaderComponent } from './components/wmHeader/wmHeader.component';
import { WmSidebarComponent } from './components/wmSidebar/wmSidebar.component';
import { WmCardComponent } from './components/wmCard/wmCard.component';
import { WmMenuComponent } from './components/wmMenu/wmMenu.component';
import { WmChartistComponent } from './components/wmChartist/wmChartist.component';

//provider
import {MenuService} from './components/wmMenu/menu.service';

@NgModule({
    imports: [RouterModule, CommonModule],
    declarations: [
        WmHeaderComponent, WmSidebarComponent,
        WmCardComponent, WmMenuComponent,
        WmChartistComponent
    ],
    providers:[MenuService],
    exports: [
        WmHeaderComponent, WmSidebarComponent,
        WmCardComponent, WmMenuComponent,
        WmChartistComponent
    ]
})
export class ThemeModule { }