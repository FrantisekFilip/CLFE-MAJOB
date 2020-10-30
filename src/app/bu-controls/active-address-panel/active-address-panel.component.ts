import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-address-panel',
  templateUrl: './active-address-panel.component.html',
  styleUrls: ['./active-address-panel.component.scss']
})
export class ActiveAddressPanelComponent implements OnInit {
  street: string;
  streetNumber: string;
  orientationNumber: string;
  registrationNumber: string;
  postcode: string;
  municipality: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
