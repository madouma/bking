import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DefaultComponent } from './default.component';
import { SharedModule } from '../../shared.module';
import { FooterComponent, HeaderComponent, SidebarComponent } from '../components';

const components = [DefaultComponent, FooterComponent, HeaderComponent, SidebarComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [...components, SharedModule],
})
export class DefaultModule {}
