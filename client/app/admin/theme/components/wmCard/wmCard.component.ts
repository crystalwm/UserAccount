import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'wm-card',
    templateUrl: './wmCard.html',
    styleUrls: ['wmCard.css']
})
export class WmCardComponent {
    @Input() title: string;
}