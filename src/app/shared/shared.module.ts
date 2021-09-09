import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DxPieChartModule, DxChartModule } from 'devextreme-angular';
import { DiagramsComponent } from '../core/dashboard/diagrams/diagrams.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    DiagramsComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatSidenavModule,
    DxPieChartModule,
    DxChartModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    MatSidenavModule,
    MatSidenavModule,
    DxPieChartModule,
    DxChartModule,
    DiagramsComponent
  ]
})
export class SharedModule { }
