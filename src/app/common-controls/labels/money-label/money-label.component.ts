import { Component, Input, OnInit, Output } from '@angular/core';
import { MoneyModel } from 'src/app/common-services/models/money-model';
import { LabelComponent } from '../label/label.component';

@Component({
  selector: 'app-money-label',
  templateUrl: './money-label.component.html',
  styleUrls: ['./money-label.component.scss']
})
export class MoneyLabelComponent extends LabelComponent implements OnInit {
  @Input()
  public value: MoneyModel;

  @Output()
  public get amount(): number {
    return this.value?.amount;
  }

  @Output()
  public get currency(): string {
    return this.value?.currency;
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
