import { NgModule } from '@angular/core';


import { TableRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';


import { SmartTableComponent } from './smartTable/smartTable.component';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../theme/theme.module';

@NgModule({
    imports: [
        TableRoutingModule,
        Ng2SmartTableModule,
        ThemeModule
    ],
    declarations: [
        TablesComponent,
        SmartTableComponent
    ]
})
export class TablesModule { }