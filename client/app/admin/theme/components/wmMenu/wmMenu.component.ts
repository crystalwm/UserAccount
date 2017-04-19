import { Component, Input } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'wm-menu',
    templateUrl: './wmMenu.html',
    styleUrls: ['./wmMenu.css']
})
export class WmMenuComponent {
    @Input() sidebarCollapsed: boolean = false;
    @Input() menuItemForm: any = { expanded: false };
    @Input() menuItemTable: any = { expanded: false };
    @Input() menuItemChart: any = { expanded: false };



    public onHoverItem($event): void {


    }

    public toggleMenu($event, menuItem): boolean {
        let $submenu = jQuery($event.currentTarget).next();

        $event.preventDefault();

        if (this.sidebarCollapsed) {

        } else {
            //submenu.slideToggle();
            menuItem.expanded = !menuItem.expanded;
            $submenu.toggle();
        }
        return false;
    }

    public toggleSubMenu($event): void {
        let menu = jQuery($event.currentTarget);
        let $lis = jQuery('.sidebar-list li');
        // $lis.each(element => {
        //     if(jQuery(element).hasClass('selected')){
        //         jQuery(element).removeClass('selected');
        //     }
        // });

        for (var i = 0; i < $lis.length; i++) {
            if (jQuery($lis[i]).hasClass('selected')) {
                jQuery($lis[i]).removeClass('selected');
            }
        }

        menu.parent().addClass('selected');
    }

}