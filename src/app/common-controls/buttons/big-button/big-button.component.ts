import { Component, Input, OnInit } from '@angular/core';
import { ActionButtonComponent } from '../action-button/action-button.component';

@Component({
  selector: 'app-big-button',
  templateUrl: './big-button.component.html',
  styleUrls: ['./big-button.component.scss']
})
export class BigButtonComponent extends ActionButtonComponent implements OnInit {
  @Input()
  public imageUrl: string;

  @Input()
  public label: string;

  ngOnInit(): void {
    super.ngOnInit();
  }
}
