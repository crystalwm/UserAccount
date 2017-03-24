import { Component,ViewEncapsulation } from '@angular/core';

@Component({
     moduleId: module.id,
    selector: 'pages',
    template: `
        <header></header>
        <sidebar></sidebar>  
        <div class="main">
            <div class="content">
                 <router-outlet></router-outlet>
            </div>
        </div>      
    `,
    styleUrls: ['./pages.css'],
    encapsulation: ViewEncapsulation.None
})
export class PagesComponent { }