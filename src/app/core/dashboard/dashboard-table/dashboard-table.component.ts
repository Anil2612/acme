import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss']
})
export class DashboardTableComponent implements OnInit {
  @Input() displayedColumns: any;
  @Input() dataSource: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
