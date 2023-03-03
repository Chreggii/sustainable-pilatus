import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MenuViewModel } from './models/menu-view-model.interface';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  viewModel$!: Observable<MenuViewModel>;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.viewModel$ = this.menuService.getViewModel();
  }
}
