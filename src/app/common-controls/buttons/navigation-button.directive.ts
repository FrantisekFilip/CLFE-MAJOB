import { Directive, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonDirective } from './button.directive';

@Directive()
export abstract class NavigationButtonDirective extends ButtonDirective {
  @Input()
  public redirectTo: string;

  constructor(private router: Router) {
    super();
  }

  redirect(): void {
    if (this.redirectTo) {
      this.router.navigate([this.redirectTo]);
    }
  }
}
