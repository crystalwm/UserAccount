import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './smartTable.html'
})
export class SmartTableComponent {
    settings = {
        columns: {
            id: { title: 'ID' },
            name: { title: 'Full Name' },
            username: { title: 'User Name' },
            email: { title: 'Email' }
        }
    };
    data = [
        { id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz" },
        { id: 2, name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv" },
        // ... list of items 
        { id: 11, name: "Nicholas DuBuque", username: "Nicholas.Stanton", email: "Rey.Padberg@rosamond.biz" }
    ];
}