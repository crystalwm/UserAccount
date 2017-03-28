import { Component, ViewEncapsulation } from '@angular/core';

@Component({
     moduleId: module.id,
    selector: 'admin',
    //   templateUrl: './main.html',
     styleUrls: ['./admin.css'],
    template: `
        <main>
            <router-outlet></router-outlet>
        </main>
  `,
    encapsulation: ViewEncapsulation.None
})
export class AdminComponent { }