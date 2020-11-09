import { Component, Input, OnInit } from '@angular/core';
import { PhoneNumberModel } from 'src/app/common-services/models/phone-number-model';
import { LabelComponent } from '../label/label.component';

@Component({
  selector: 'app-phone-number-label',
  templateUrl: './phone-number-label.component.html',
  styleUrls: ['./phone-number-label.component.scss']
})
export class PhoneNumberLabelComponent extends LabelComponent implements OnInit {
  @Input()
  public value: PhoneNumberModel;

  public get viewValue(): string {
    return this.value?.value;
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
