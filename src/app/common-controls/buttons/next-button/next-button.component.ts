import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationButtonDirective } from '../navigation-button.directive';

@Component({
  selector: 'app-next-button',
  templateUrl: './next-button.component.html',
  styleUrls: ['./next-button.component.scss']
})
export class NextButtonComponent extends NavigationButtonDirective implements OnInit {

  constructor(router: Router) {
    super(router);
  }

  protected OnConstruct(): { defaultIcon: string } {
    return { defaultIcon: null };
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
