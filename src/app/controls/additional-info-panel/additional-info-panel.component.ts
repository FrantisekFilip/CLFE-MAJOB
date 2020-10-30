import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-additional-info-panel',
  templateUrl: './additional-info-panel.component.html',
  styleUrls: ['./additional-info-panel.component.scss']
})
export class AdditionalInfoPanelComponent implements OnInit {
  viewCommencementDate: string;
  selectedMailingAddress: boolean;
  selectedOtherPolicyHolder: boolean;
  termsAndConditionsChecked: boolean;
  infoDocumentsChecked: boolean;
  gdprChecked: boolean;
  contractualInfoChecked: boolean;
  contactMethodsAllowedChecked: boolean;

  @Input()
  public parentForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
