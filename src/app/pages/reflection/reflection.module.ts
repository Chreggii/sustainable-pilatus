import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { ReflectionComponent } from './reflection.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [ReflectionComponent],
  exports: [ReflectionComponent],
})
export class ReflectionModule {}
