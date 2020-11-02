import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';
import { BaseModel } from '../../common-services/models/base-model';

@Component({
  selector: 'app-base-form-panel',
  template: ``,
  styleUrls: ['./base-form-panel.component.scss']
})
export class BaseFormPanelComponent implements OnInit {
  private _controlName: string;

  public get controlName(): string {
    return this._controlName;
  }

  @Input()
  public parentForm: FormGroup;

  public readonly panelControl: FormGroup;

  constructor() {
    this.panelControl = new FormGroup({});
  }

  protected OnConstruct(): { controlName: string, controls?: { [key: string]: AbstractControl; }[] } {
    return { controlName: '' };
  }

  public ngOnInit(): void {
    const metadata = this.OnConstruct();
    this._controlName = metadata.controlName;

    if (metadata.controls) {
      for (const control of metadata.controls) {
        this.panelControl.addControl('', null); // TODO - fixit
      }
    }

    this.parentForm.addControl(this.controlName, this.panelControl);
  }
}
