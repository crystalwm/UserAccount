import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablesComponent } from './tables.component';


import { SmartTableComponent } from './smartTable/smartTable.component';

//basice component
import { HoverRowsComponent } from './hoverRows/hoverRows.component';
import { BorderedTableComponent } from './borderedTable/borderedTable.component';
import { CondensedTableComponent } from './condensedTable/condensedTable.component';
import { StripedTableComponent } from './stripedTable/stripedTable.component';
import { ContextualRowsComponent } from './contextualRows/contextualRows.component';
import { ResponsiveTableComponent } from './responsiveTable/responsiveTable.component';


const routeConfig: Routes = [{
    path: '',
    component: TablesComponent,
    children: [
        { path: 'smart-table', component: SmartTableComponent },
        { path: 'hover-rows', component: HoverRowsComponent },
        { path: 'bordered-table', component: BorderedTableComponent },
        { path: 'condensed-table', component: CondensedTableComponent },
        { path: 'striped-table', component: StripedTableComponent },
        { path: 'contextual-rows', component: ContextualRowsComponent },
        { path: 'responsive-table', component: ResponsiveTableComponent },
        { path: '', redirectTo: 'smart-table', pathMatch: 'full' }
    ]
}];

@NgModule({
    imports: [
        RouterModule.forChild(routeConfig)
    ],
    exports: [RouterModule]
})
export class TableRoutingModule { }