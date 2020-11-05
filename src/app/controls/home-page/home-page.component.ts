import { Component, Input, OnInit, Output } from '@angular/core';
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public applicationRoute: string;

  constructor() { }

  ngOnInit(): void {
  }
}
