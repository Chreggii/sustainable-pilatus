import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';

import { SharedModule } from '../../shared/shared.module';
import { EvaluationComponent } from './evaluation.component';

@NgModule({
  imports: [CommonModule, SharedModule, NgApexchartsModule],
  declarations: [EvaluationComponent],
  exports: [EvaluationComponent],
})
export class EvaluationModule {}
