import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablesComponent } from './tables.component';


import { SmartTableComponent } from './smartTable/smartTable.component';


const routeConfig: Routes = [{
    path: '',
    component: TablesComponent,
    children: [
        { path: 'smart-table', component: SmartTableComponent },
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