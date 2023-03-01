import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageHeadingComponent } from './page-heading/page-heading.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { TextDescriptionComponent } from './text-description/text-description.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    PageHeadingComponent,
    ParagraphComponent,
    TextDescriptionComponent,
  ],
  exports: [PageHeadingComponent, ParagraphComponent, TextDescriptionComponent],
})
export class ComponentsModule {}
