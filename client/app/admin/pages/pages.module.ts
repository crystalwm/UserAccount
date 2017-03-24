import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../theme/theme.module';
//import { FormsModule } from './forms/forms.module';

@NgModule({
    imports: [
        CommonModule,
        ThemeModule,
        PagesRoutingModule
        //      FormsModule
    ],
    declarations: [PagesComponent]
})
export class PagesModule { }