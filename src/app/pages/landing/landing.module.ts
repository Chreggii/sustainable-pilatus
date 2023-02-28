import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LandingComponent } from './landing.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LandingComponent],
  exports: [LandingComponent],
})
export class LandingModule {}
