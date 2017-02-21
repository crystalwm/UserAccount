import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule],
    declarations: [HeaderComponent, SidebarComponent],
    exports: [HeaderComponent, SidebarComponent]
})
export class ThemeModule { }