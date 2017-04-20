"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PAGES_MENU = [{
        path: 'dashboard',
        data: {
            menu: {
                title: 'Dashboard',
                icon: 'ion-home',
                selected: false,
                expended: false,
                order: 0
            }
        }
    }, {
        path: 'forms',
        data: {
            menu: {
                title: 'Forms',
                icon: 'ion-compose',
                selected: false,
                expended: false,
                order: 100
            },
            children: [
                {
                    path: 'standard-fields',
                    data: {
                        menu: {
                            title: 'standard-fields'
                        }
                    }
                },
                {
                    path: 'standard-fields',
                    data: {
                        menu: {
                            title: 'standard-fields'
                        }
                    }
                }
            ]
        }
    }];
//# sourceMappingURL=mock-menus.js.map