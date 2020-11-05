import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-accepted',
  templateUrl: './not-accepted.component.html',
  styleUrls: ['./not-accepted.component.scss']
})
export class NotAcceptedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    window.location.href = 'https://www.pvzp.cz/cs/';
  }

  redirect() {
    window.location.href = 'https://www.pvzp.cz/cs/kde-nas-najdete/obchodni-mista-pvzp/';
  }

}
