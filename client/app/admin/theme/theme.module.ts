import { NgModule } from '@angular/core';
import { WmHeaderComponent } from './components/wmHeader/wmHeader.component';
import { WmSidebarComponent } from './components/wmSidebar/wmSidebar.component';
import { WmCardComponent } from './components/wmCard/wmCard.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [RouterModule, CommonModule],
    declarations: [WmHeaderComponent, WmSidebarComponent, WmCardComponent],
    exports: [WmHeaderComponent, WmSidebarComponent, WmCardComponent]
})
export class ThemeModule { }