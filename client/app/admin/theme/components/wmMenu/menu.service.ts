import {Injectable} from '@angular/core';

import {PAGES_MENU} from './mock-menus';


@Injectable()
export class MenuService{
    getMenus():Promise<any>{
        return Promise.resolve(PAGES_MENU);
    }
}
