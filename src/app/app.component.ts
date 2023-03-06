import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscriber } from 'rxjs';

import { MenuPage } from './components/menu/models/menu.type';
import { MenuService } from './components/menu/services/menu.service';
import { ContactComponent } from './pages/contact/contact.component';
import { EvaluationComponent } from './pages/evaluation/evaluation.component';
import { ProjectComponent } from './pages/project/project.component';
import { ReflectionComponent } from './pages/reflection/reflection.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private subscriber = new Subscriber();

  isMenuVisible = false;

  @ViewChild(ProjectComponent, { read: ElementRef }) projectPage!: ElementRef;
  @ViewChild(EvaluationComponent, { read: ElementRef })
  evaluationPage!: ElementRef;
  @ViewChild(ReflectionComponent, { read: ElementRef })
  reflectionPage!: ElementRef;
  @ViewChild(ContactComponent, { read: ElementRef }) contactPage!: ElementRef;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.subscriber.add(
      this.menuService.selectedPage$.subscribe((pageId) => {
        this.scrollToPage(pageId);
        this.isMenuVisible = false;
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  private scrollToPage(pageId: MenuPage): void {
    const pageEl = [
      { page: this.projectPage, condition: () => pageId === 'project' },
      { page: this.evaluationPage, condition: () => pageId === 'evaluation' },
      { page: this.reflectionPage, condition: () => pageId === 'reflection' },
      { page: this.contactPage, condition: () => pageId === 'contact' },
    ].find(({ condition }) => !!condition())?.page;

    pageEl?.nativeElement.scrollIntoView();
  }
}
