import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationButtonComponent } from '../navigation-button/navigation-button.component';

@Component({
  selector: 'app-next-button',
  templateUrl: './next-button.component.html',
  styleUrls: ['./next-button.component.scss']
})
export class NextButtonComponent extends NavigationButtonComponent implements OnInit {

  constructor(router: Router) {
    super(router);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
