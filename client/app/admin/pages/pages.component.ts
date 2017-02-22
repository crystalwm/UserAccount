import { Component } from '@angular/core';

@Component({
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
})
export class PagesComponent { }