import { Component, OnInit } from '@angular/core';
import { ButtonDirective } from '../button.directive';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent extends ButtonDirective implements OnInit {

  ngOnInit(): void {
    super.ngOnInit();
  }

  onClick(e) {

  }
}
