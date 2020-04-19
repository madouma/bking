import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';

const components = [DashboardComponent];

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class DashboardModule {}
