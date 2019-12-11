import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor() { }

  ngOnInit() {
    this.menuItems = [
      new MenuItem('User', '/users/list', 'User List'),
      new MenuItem('Vendor', '/vendors/list', 'Vendor List'),
      new MenuItem('Product', '/products/list', 'Product List'),
      new MenuItem('Request', '/requests/list', 'Request List'),
      new MenuItem('Review', '/requests/review', 'Review List'),
      

    ]
  }

}
