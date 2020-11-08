import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationButtonComponent } from '../navigation-button/navigation-button.component';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent extends NavigationButtonComponent implements OnInit {

  constructor(router: Router) {
    super(router);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
