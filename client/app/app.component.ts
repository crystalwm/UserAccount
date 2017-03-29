import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        <router-outlet></router-outlet>
        `,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent { }