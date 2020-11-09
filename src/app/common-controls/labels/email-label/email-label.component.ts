import { Component, Input, OnInit } from '@angular/core';
import { EmailModel } from 'src/app/common-services/models/email-model';
import { LabelComponent } from '../label/label.component';

@Component({
  selector: 'app-email-label',
  templateUrl: './email-label.component.html',
  styleUrls: ['./email-label.component.scss']
})
export class EmailLabelComponent extends LabelComponent implements OnInit {
  @Input()
  public value: EmailModel;

  public get viewValue(): string {
    return this.value?.value;
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
