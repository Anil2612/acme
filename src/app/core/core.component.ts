import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {
  @ViewChild('drawer') drawer: any; // Get mat-drawer element

  /**
   * Sidenav options contains
   * icons, label and selected property for the option select
   */
  sideNavOptions = [
    { icon: 'icon_home', label: 'Home', selected: false },
    { icon: 'icon_dashboard', label: 'Dashboard', selected: true },
    { icon: 'icon_inbox', label: 'Inbox', selected: false },
    { icon: 'icon_products', label: 'Products', selected: false },
    { icon: 'icon_admin', label: 'Admin', selected: false },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if (window.innerWidth < 600) {
      this.toggleDrawer();
    }
  }

  /**
   * Toggle the drawer for sidenav display
   */
  toggleDrawer() {
    this.drawer.toggle();
  }

}
