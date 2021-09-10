import { Component, OnInit, Output, EventEmitter, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChildren("search") searchInput!: any;
  @Output() openSidnav = new EventEmitter();
  showNotification = false;
  showProfile = false;
  showNav = true;
  showSearch = false;
  isNotSmall = true;
  notifications = [
    {
      icon:'profile-pic-02',
      name:'Bavid Kames',
      detail:`Assigned you on the call with Sara`,
      time:'2 min ago'
    },
    {
      icon:'profile-pic-06',
      name:'Alexa Marry',
      detail:`Marked the task <a class="link" href="#">New UI</a> as done`,
      time:'5 min ago'
    },
    {
      icon:'profile-pic-05',
      name:'Eva Maria',
      detail:`Added a new comment on Sales task`,
      time:'10 min ago'
    },
  ]
  constructor() { }

  ngOnInit(): void {}

  openSidebar() {
    this.showNav = !this.showNav;
    this.openSidnav.emit();
  }

  openSearch(isNotMob:Boolean) {
    if(isNotMob) {
      this.searchInput.first.nativeElement.focus();
    } else {
      this.showSearch = !this.showSearch;
    }
  }

  openNotification() {
    this.showNotification = !this.showNotification;
    this.showProfile = false;
  }

  openProfile() {
    this.showProfile = !this.showProfile;
    this.showNotification = false;
  }

}
