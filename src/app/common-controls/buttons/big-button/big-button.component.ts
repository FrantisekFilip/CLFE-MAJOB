import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationButtonComponent } from '../navigation-button/navigation-button.component';

@Component({
  selector: 'app-big-button',
  templateUrl: './big-button.component.html',
  styleUrls: ['./big-button.component.scss']
})
export class BigButtonComponent extends NavigationButtonComponent implements OnInit {
  @Input()
  public imageUrl: string;

  @Input()
  public label: string;

  constructor(router: Router) {
    super(router);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
