import { Component, Input, OnInit } from '@angular/core';
import { AddressModel } from 'src/app/bu-services/models/address-model';
import { ClientInfoModel } from 'src/app/bu-services/models/client-info-model';

@Component({
  selector: 'app-address-info-panel',
  templateUrl: './address-info-panel.component.html',
  styleUrls: ['./address-info-panel.component.scss']
})
export class AddressInfoPanelComponent implements OnInit {
  private _person: ClientInfoModel;
  private _personName: string;
  private _address: AddressModel;
  private _streetAndNumber: string;

  public get person(): ClientInfoModel {
    return this._person;
  }

  @Input()
  public set person(value: ClientInfoModel) {
    this._person = value;
    const parts: string[] = [];

    if (value) {
      if (value.firstName) {
        parts.push(value.firstName);
      }

      if (value.lastName) {
        parts.push(value.lastName);
      }
    }

    this._personName = parts.join(' ');
  }

  public get personName(): string {
    return this._personName;
  }

  public get address(): AddressModel {
    return this._address;
  }

  @Input()
  public set address(value: AddressModel) {
    this._address = value;
    const parts: string[] = [];

    if (value) {
      if (value.streetName) {
        parts.push(value.streetName);
      }

      if (value.registrationNumber) {
        parts.push(value.registrationNumber.toString());
      }
    }

    this._streetAndNumber = parts.join(' ');
  }

  public get streetAndNumber(): string {
    return this._streetAndNumber;
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
