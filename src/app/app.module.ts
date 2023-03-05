import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactModule } from './pages/contact/contact.module';
import { EvaluationModule } from './pages/evaluation/evaluation.module';
import { LandingModule } from './pages/landing/landing.module';
import { ProjectModule } from './pages/project/project.module';
import { ReflectionModule } from './pages/reflection/reflection.module';

@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EvaluationModule,
    NgbModule,
    LandingModule,
    ProjectModule,
    ContactModule,
    ReflectionModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
