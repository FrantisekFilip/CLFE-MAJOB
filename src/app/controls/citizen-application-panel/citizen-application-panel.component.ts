import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { BaseFormPanelComponent } from 'src/app/common-controls/forms/base-form-panel/base-form-panel.component';

@Component({
  selector: 'app-citizen-application-panel',
  templateUrl: './citizen-application-panel.component.html',
  styleUrls: ['./citizen-application-panel.component.scss']
})
export class CitizenApplicationPanelComponent extends BaseFormPanelComponent implements OnInit {
  private _employeeActive = false;

  protected OnConstruct(): { controlName: string, controls?: { [key: string]: AbstractControl; }[] } {
    return { controlName: 'CitizenApplicationPanel' };
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  public isEmployeeActive(): boolean {
    return this._employeeActive;
  }

  public addOrRemoveEmployeeSection = (): void => {
    this._employeeActive = !this._employeeActive;
  }
}
