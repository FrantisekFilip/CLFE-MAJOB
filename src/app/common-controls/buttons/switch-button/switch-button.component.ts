import { Component, Input, OnInit } from '@angular/core';
import { UndefinedParameterError } from 'src/app/common-services/errorHandling/undefined-parameter-error';
import { nameof } from 'src/app/common-services/utils';

@Component({
  selector: 'app-switch-button',
  template: ``,
  styles: [
  ]
})
export class SwitchButtonComponent implements OnInit {
  private _defaultIcon: string;
  private _icon: string;

  @Input()
  public label: string;

  public get icon(): string {
    return this._icon;
  }

  @Input()
  public set icon(value: string) {
    if (value) {
      this._icon = value;
    }
    else {
      this._icon = this._defaultIcon;
    }
  }

  constructor() { }

  protected OnConstruct(): { defaultIcon: string } {
    return { defaultIcon: 'error_outline' };
  }

  ngOnInit(): void {
    const metadata = this.OnConstruct();
    const defaultIcon = metadata.defaultIcon;

    if (!defaultIcon) {
      throw new UndefinedParameterError(nameof(defaultIcon));
    }

    this._defaultIcon = defaultIcon;
  }
}
