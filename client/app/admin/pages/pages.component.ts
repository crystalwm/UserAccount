import { Component } from '@angular/core';

@Component({
    selector: 'pages',
    template: `
        <header></header>
        <sidebar></sidebar>    
        <router-outlet></router-outlet>
    
    `
})
export class PagesComponent { }