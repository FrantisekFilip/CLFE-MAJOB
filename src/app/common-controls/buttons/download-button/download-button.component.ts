import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-download-button',
  templateUrl: './download-button.component.html',
  styleUrls: ['./download-button.component.scss']
})
export class DownloadButtonComponent implements OnInit {
  private _label = 'Stáhnout';

  public get label(): string {
    return this._label;
  }

  @Input()
  public set label(value: string) {
    this._label = value;
  }

  @Input()
  public targetUrl: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  download(): void {
    window.open(this.targetUrl, '_blank');
  }
}
