import { ReturnStatement } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { AddressModel } from 'src/app/bu-services/models/address-model';
import { ClientInfoModel } from 'src/app/bu-services/models/client-info-model';

@Component({
  selector: 'app-address-info-panel',
  templateUrl: './address-info-panel.component.html',
  styleUrls: ['./address-info-panel.component.scss']
})
export class AddressInfoPanelComponent implements OnInit {
  private _address: AddressModel;

  @Input()
  public person: ClientInfoModel;

  public get personName(): string {
    return this.person?.name;
  }

  public get address(): AddressModel {
    return this._address;
  }

  @Input()
  public set address(value: AddressModel) {
    this._address = value;
  }

  public get streetAndNumber(): string {
    if (this._address) {
      const parts: string[] = [];

      if (this._address.streetName) {
        parts.push(this._address.streetName);
      }

      if (this._address.registrationNumber) {
        parts.push(this._address.registrationNumber);
      }

      return parts.join(' ');
    }
    else {
      return null;
    }
  }

  public get municipality(): string {
    return this._address?.municipality;
  }

  public get postCode(): string {
    return this._address?.postcode;
  }

  constructor() { }

  ngOnInit(): void {
  }
}
