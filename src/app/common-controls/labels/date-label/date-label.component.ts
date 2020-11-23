import { Component, Input, OnInit } from '@angular/core';
import { Moment } from 'moment';
import { LabelDirective } from '../label.directive';

@Component({
  selector: 'app-date-label',
  templateUrl: './date-label.component.html',
  styleUrls: ['./date-label.component.scss']
})
export class DateLabelComponent extends LabelDirective implements OnInit {
  @Input()
  public value: Moment;

  public get formatted(): string {
    if (this.value) {
      return this.value.toDate().toDateString();
    }
    else {
      return null;
    }
  }

  ngOnInit(): void {
  }
}
