import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-button',
  template: ` `,
  styles: [
  ]
})
export class NavigationButtonComponent implements OnInit {
  @Input()
  public redirectTo: string;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  redirect(): void {
    if (this.redirectTo) {
      this.router.navigate([this.redirectTo]);
    }
  }
}
