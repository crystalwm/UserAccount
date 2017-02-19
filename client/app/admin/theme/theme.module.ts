import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule],
    declarations: [HeaderComponent],
    exports: [HeaderComponent]
})
export class ThemeModule { }