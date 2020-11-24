import { Component, OnInit } from '@angular/core';
import { ButtonDirective } from '../button.directive';

@Component({
  selector: 'app-big-button',
  templateUrl: './big-button.component.html',
  styleUrls: ['./big-button.component.scss']
})
export class BigButtonComponent extends ButtonDirective implements OnInit {

  ngOnInit(): void {
  }
}
