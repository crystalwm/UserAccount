import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';

import { TableRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';


import { SmartTableComponent } from './smartTable/smartTable.component';

//basice component
import { HoverRowsComponent } from './hoverRows/hoverRows.component';
import { BorderedTableComponent } from './borderedTable/borderedTable.component';
import { CondensedTableComponent } from './condensedTable/condensedTable.component';
import { StripedTableComponent } from './stripedTable/stripedTable.component';
import { ContextualRowsComponent } from './contextualRows/contextualRows.component';
import { ResponsiveTableComponent } from './responsiveTable/responsiveTable.component';
//third party component
import { Ng2SmartTableModule } from 'ng2-smart-table';

//the custom component
import { ThemeModule } from '../../theme/theme.module';

@NgModule({
    imports: [
        TableRoutingModule,
        Ng2SmartTableModule,
        ThemeModule,
        CommonModule
    ],
    declarations: [
        TablesComponent,
        SmartTableComponent,
        HoverRowsComponent,
        BorderedTableComponent,
        CondensedTableComponent,
        StripedTableComponent,
        ContextualRowsComponent,
        ResponsiveTableComponent
    ]
})
export class TablesModule { }