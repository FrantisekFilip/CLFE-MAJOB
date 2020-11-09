import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { BaseFormPanelComponent } from 'src/app/common-controls/forms/base-form-panel/base-form-panel.component';

@Component({
  selector: 'app-employee-application-panel',
  templateUrl: './employee-application-panel.component.html',
  styleUrls: ['./employee-application-panel.component.scss']
})
export class EmployeeApplicationPanelComponent extends BaseFormPanelComponent implements OnInit {
  private _citizenActive = false;

  protected OnConstruct(): { controlName: string, controls?: { [key: string]: AbstractControl; }[] } {
    return { controlName: 'EmployeeApplicationPanel' };
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  public isCitizenActive(): boolean {
    return this._citizenActive;
  }

  public addOrRemoveCitizenSection = (): void => {
    this._citizenActive = !this._citizenActive;
  }
}
