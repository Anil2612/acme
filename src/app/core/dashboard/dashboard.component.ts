import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/common/services/general.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['Location', 'Views', 'Sales', 'Conversion', 'Total'];
  dataSource: any[] = [
    { views: 3746, location: 'google.com', sales: 752, conversion: '43%', total: 1200 },
    { views: 8126, location: 'facebook.com', sales: 728, conversion: '32%', total: 1600 },
    { views: 8836, location: 'twitter.com', sales: 694, conversion: '28%', total: 1222 },
    { views: 1173, location: 'Direct, email, IM', sales: 645, conversion: '24%', total: 2600 },
    { views: 2739, location: 'linkedin.com', sales: 539, conversion: '20%', total: 3190 },
    { views: 2739, location: 'instagram.com', sales: 539, conversion: '20%', total: 4100 },
  ];

  users = [
    {
      icon: 'profile-pic-03',
      name: 'Drew James',
      country: 'United States',
      mobile: 'Mobile : 8715674877'
    },
    {
      icon: 'profile-pic-02',
      name: 'Bavid Kames',
      country: 'United States',
      mobile: 'Mobile : 8715674877'
    },
    {
      icon: 'profile-pic-04',
      name: 'Lavid Emes',
      country: 'United States',
      mobile: 'Mobile : 8715674877'
    }
  ];

  ngOnInit(): void {

  }

  openVideo() {
    window.open('https://www.youtube.com/watch?v=Oy6hk6Y7VHQ', '_blank')
  }

}
