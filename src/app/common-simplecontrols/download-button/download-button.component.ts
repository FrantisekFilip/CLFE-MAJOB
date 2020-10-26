import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-download-button',
  templateUrl: './download-button.component.html',
  styleUrls: ['./download-button.component.scss']
})
export class DownloadButtonComponent implements OnInit {

  @Input()
  public targetUrl: string;

  constructor() { }

  ngOnInit(): void {
  }

}
