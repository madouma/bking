import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { CampainCreateComponent } from './campain-create/campain-create.component';
import { CampainDetailComponent } from './campain-detail/campain-detail.component';
import { DragDropDirective } from './directives/drag-drop.directive';
import { UploadFilesComponent } from './upload-files/upload-files.component';

const components = [
  CampainCreateComponent,
  CampainDetailComponent,
  DragDropDirective,
  UploadFilesComponent,
];

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'create', pathMatch: 'full' },
      { path: 'create', component: CampainCreateComponent },
      { path: 'detail', component: CampainDetailComponent },
    ],
  },
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class CampainModule {}
