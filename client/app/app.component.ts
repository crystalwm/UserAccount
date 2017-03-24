import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <router-outlet></router-outlet>
        `,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent { }