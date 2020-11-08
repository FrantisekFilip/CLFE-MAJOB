import { Component, Input, OnInit } from '@angular/core';
import { EnumerationModel } from 'src/app/common-services/models/enumeration-model';
import { LabelComponent } from '../label/label.component';

@Component({
  selector: 'app-enumeration-label',
  templateUrl: './enumeration-label.component.html',
  styleUrls: ['./enumeration-label.component.scss']
})
export class EnumerationLabelComponent extends LabelComponent implements OnInit {
  @Input()
  public value: EnumerationModel;

  public get viewValue(): string {
    return this.value?.viewValue;
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
