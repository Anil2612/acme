import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() sideNavOptions!: any[];

  constructor() { }

  ngOnInit(): void {
  }

  clickOption(index: any) {
    this.sideNavOptions.map((opt, i) => {
      if (i === index) {
        opt.selected = true;
      } else {
        opt.selected = false;
      }
    })
  }

}
