import { Component, Input } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'wm-menu',
    templateUrl: './wmMenu.html',
    styleUrls: ['./wmMenu.css']
})
export class WmMenuComponent {
    @Input() sidebarCollapsed: boolean = false;
    @Input() menuItem: any = { expanded: false };



    public onHoverItem($event): void {


    }

    public toggleMenu($event): boolean {
        let $submenu = jQuery($event.currentTarget).next();

        $event.preventDefault();

        if (this.sidebarCollapsed) {

        } else {
            //submenu.slideToggle();
            this.menuItem.expanded = !this.menuItem.expanded;
            $submenu.toggle();
        }
        return false;
    }

    public toggleSubMenu($event):void{
        let menu=jQuery($event.currentTarget);
        menu.parent().siblings().removeClass('selected')
        menu.parent().addClass('selected');
    }

}