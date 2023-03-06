import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

import { MenuViewModel } from '../models/menu-view-model.interface';
import { MenuPage } from '../models/menu.type';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private selectedPage = new Subject<MenuPage>();

  selectedPage$ = this.selectedPage.asObservable();

  private readonly menuItems: {
    id: MenuPage;
    label: string;
    action: (id: MenuPage) => void;
  }[] = [
    {
      id: 'project',
      label: 'Project',
      action: (id: MenuPage) => this.selectItem(id),
    },
    {
      id: 'evaluation',
      label: 'Auswertung',
      action: (id: MenuPage) => this.selectItem(id),
    },
    {
      id: 'reflection',
      label: 'Reflektion',
      action: (id: MenuPage) => this.selectItem(id),
    },
    {
      id: 'contact',
      label: 'Kontakt',
      action: (id: MenuPage) => this.selectItem(id),
    },
  ];

  getViewModel(): Observable<MenuViewModel> {
    return of({ items: this.menuItems });
  }

  private selectItem(id: MenuPage): void {
    this.selectedPage.next(id);
  }
}
