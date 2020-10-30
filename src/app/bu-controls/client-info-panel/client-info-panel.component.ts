import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-info-panel',
  templateUrl: './client-info-panel.component.html',
  styleUrls: ['./client-info-panel.component.scss']
})
export class ClientInfoPanelComponent implements OnInit {
  firstName: string;
  lastName: string;
  title: string;
  birthNumber: string;
  birthDate: Date;
  phoneNumber = '+420';
  email = '@';

  constructor() { }

  ngOnInit(): void {
  }

}
