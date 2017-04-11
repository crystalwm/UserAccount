import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './smartTable.html'
})
export class SmartTableComponent {
    settings = {
        add: {
            addButtonContent: '<i class="ion-ios-plus-outline"></i>',
            createButtonContent: '<i class="ion-checkmark"></i>',
            cancelButtonContent: '<i class="ion-close"></i>',
        },
        edit: {
            editButtonContent: '<i class="ion-edit"></i>',
            saveButtonContent: '<i class="ion-checkmark"></i>',
            cancelButtonContent: '<i class="ion-close"></i>',
        },
        delete: {
            deleteButtonContent: '<i class="ion-trash-a"></i>',
            confirmDelete: true
        },
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