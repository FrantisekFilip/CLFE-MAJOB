import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationButtonDirective } from '../navigation-button.directive';

@Component({
  selector: 'app-navigation-button',
  templateUrl: './navigation-button.component.html',
  styleUrls: ['./navigation-button.component.scss']
})
export class NavigationButtonComponent extends NavigationButtonDirective implements OnInit {

  constructor(router: Router) {
    super(router);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
