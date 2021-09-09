import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DiagramsComponent } from './diagrams/diagrams.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DxChartModule, DxPieChartModule } from 'devextreme-angular';
import { ProfileComponent } from './profile/profile.component';
import { DashboardTableComponent } from './dashboard-table/dashboard-table.component';
import { ProductContentComponent } from './product-content/product-content.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    DashboardTableComponent,
    ProductContentComponent,
    // DiagramsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    DxPieChartModule,
    DxChartModule
  ]
})
export class DashboardModule { }
