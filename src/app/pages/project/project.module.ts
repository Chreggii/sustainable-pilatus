import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { ProjectComponent } from './project.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [ProjectComponent],
  exports: [ProjectComponent],
})
export class ProjectModule {}
