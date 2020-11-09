import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { AddressModel } from 'src/app/bu-services/models/address-model';
import { AddressService } from 'src/app/bu-services/services/address.service';
import { BaseFormPanelComponent } from 'src/app/common-controls/forms/base-form-panel/base-form-panel.component';

@Component({
  selector: 'app-active-address-panel',
  templateUrl: './active-address-panel.component.html',
  styleUrls: ['./active-address-panel.component.scss'],
  providers: [AddressService]
})
export class ActiveAddressPanelComponent extends BaseFormPanelComponent implements OnInit {
  private _address: AddressModel;

  @Input()
  public header: string;

  get address(): AddressModel {
    return this._address;
  }

  @Input()
  set address(value: AddressModel) {
    this._address = value;
  }

  constructor(private addressService: AddressService) {
    super();
  }

  protected OnConstruct(): { controlName: string, controls?: { [key: string]: AbstractControl; }[] } {
    return { controlName: 'activeAddressInfoPanel' };
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
