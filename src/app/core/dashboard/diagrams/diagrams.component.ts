import { ChangeDetectorRef, Component, Input, NgZone, OnInit, ViewChild } from '@angular/core';
import { DxPieChartComponent } from 'devextreme-angular';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { GeneralService } from 'src/app/common/services/general.service';
@Component({
  selector: 'app-diagrams',
  templateUrl: './diagrams.component.html',
  styleUrls: ['./diagrams.component.scss']
})

export class DiagramsComponent {
  @Input() graphType = 0;
  @ViewChild(DxPieChartComponent) pieChart!: DxPieChartComponent;
  widthVlaue = 450;
  heightValue = 440;
  languages: any[] = [{
    language: "France  4260 Sales",
    percent: 35,
    subtext: '10 Sales'
  }, {
    language: "Italy 3970 Sales",
    percent: 35,
    subtext: '10 Sales'
  }, {
    language: "Japan 4260 Sales",
    percent: 15,
    subtext: '10 Sales'
  }, {
    language: "Canada 3970 Sales",
    percent: 10,
    subtext: '10-Sales'
  }];

  energySources: any[] = [
    { value: "hydro", name: "Products Sold" },
    { value: "oil", name: "Total Views" },
  ];
  palette = ['#B5B3FB', '#80E2FF'];

  countriesInfo: any[] = [{
    country: "Jan",
    hydro: 59.8,
    oil: 937.6,
    gas: 582,
    coal: 564.3,
    nuclear: 187.9
  }, {
    country: "Feb",
    hydro: 74.2,
    oil: 308.6,
    gas: 35.1,
    coal: 956.9,
    nuclear: 11.3
  }, {
    country: "Mar",
    hydro: 40,
    oil: 128.5,
    gas: 361.8,
    coal: 105,
    nuclear: 32.4
  }, {
    country: "Apr",
    hydro: 22.6,
    oil: 241.5,
    gas: 64.9,
    coal: 120.8,
    nuclear: 64.8
  }, {
    country: "May",
    hydro: 19,
    oil: 119.3,
    gas: 28.9,
    coal: 204.8,
    nuclear: 3.8
  }, {
    country: "Jun",
    hydro: 6.1,
    oil: 123.6,
    gas: 77.3,
    coal: 85.7,
    nuclear: 37.8
  }];
  constructor(private generalService: GeneralService) {

  }

  getMarkerColor(item: any) {
    return item.series.isVisible() ? item.marker.fill : "#888";
  }
  ngOnInit() {
    this.adjustSizeBseOnsideNav();
  }

  adjustSizeBseOnsideNav() {
    this.generalService.isOpen.subscribe((isOpen: Boolean) => {
      if (isOpen) {
          this.widthVlaue = 380;
          this.heightValue = 390;
      } else {
          this.widthVlaue = 465;
          this.heightValue = 440;
      }
    });
  }
}