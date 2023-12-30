// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Components
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardLayoutComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
