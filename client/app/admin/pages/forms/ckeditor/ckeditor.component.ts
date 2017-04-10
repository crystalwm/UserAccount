import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ckeditor-component',
    templateUrl: './ckeditor.html'
})
export class CkeditorComponent {
    public content: string;
    constructor() {
        this.content = '<p>Hello <strong>World !</strong></p>'
    }
}