import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProjectComponent } from './project.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProjectComponent],
  exports: [ProjectComponent]
})
export class ProjectModule { }
