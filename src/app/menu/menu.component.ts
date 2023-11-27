import { Component } from '@angular/core';
import { MenuService } from '../menu.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menuOptions:any[];
  activeOptionIndex: number;

  constructor(private menuService: MenuService) {
    this.menuOptions = this.menuService.getMenuItems();
    this.activeOptionIndex = 0;
  }

  toggleSection(index: number) {
    this.activeOptionIndex = index;
  }


}
