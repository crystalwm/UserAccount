import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';


import { PagesModule } from './pages/pages.module';
import { ThemeModule } from './theme/theme.module';

@NgModule({
    imports: [
        ThemeModule,
        AdminRoutingModule,
        PagesModule
    ],
    declarations: [AdminComponent],
    bootstrap: [AdminComponent]
})
export class AdminModule { }