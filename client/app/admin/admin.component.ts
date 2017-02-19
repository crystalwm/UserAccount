import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'admin',
    //   templateUrl: './main.html',
    //  styleUrls: ['./main.css'],
    template: `
        <main>
            <router-outlet></router-outlet>
        </main>
  `,
    encapsulation: ViewEncapsulation.None
})
export class AdminComponent { }