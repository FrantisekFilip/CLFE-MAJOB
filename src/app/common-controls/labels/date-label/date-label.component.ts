import { Component, Input, OnInit } from '@angular/core';
import { LabelComponent } from '../label/label.component';

@Component({
  selector: 'app-date-label',
  templateUrl: './date-label.component.html',
  styleUrls: ['./date-label.component.scss']
})
export class DateLabelComponent extends LabelComponent implements OnInit {
  @Input()
  public value: Date;

  public get viewValue(): string {
    return this.value?.toDateString();
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
