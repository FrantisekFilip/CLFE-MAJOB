import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { CommonServicesModule } from './../common-services/common-services.module';
import { CommonSimplecontrolsModule } from './../common-simplecontrols/common-simplecontrols.module';
import { CommonControlsModule } from './../common-controls/common-controls.module';
import { BuServicesModule } from './../bu-services/bu-services.module';
import { ClientInfoPanelComponent } from './client-info-panel/client-info-panel.component';
import { ActiveAddressPanelComponent } from './active-address-panel/active-address-panel.component';
import { AddressPanelComponent } from './address-panel/address-panel.component';

@NgModule({
  declarations: [ClientInfoPanelComponent, AddressPanelComponent, ActiveAddressPanelComponent],
  exports: [
    ClientInfoPanelComponent, AddressPanelComponent, ActiveAddressPanelComponent
  ],
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    CommonServicesModule,
    CommonSimplecontrolsModule,
    CommonControlsModule,
    BuServicesModule
  ]
})
export class BuControlsModule { }
