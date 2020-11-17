import { Directive, Input, OnInit } from '@angular/core';
import { UndefinedParameterError } from 'src/app/common-services/errorHandling/undefined-parameter-error';
import { nameof } from 'src/app/common-services/utils';
import { LabelPosition } from './../label-position';

@Directive()
export abstract class ButtonDirective implements OnInit {
  private _defaultIcon: string;
  private _icon: string;
  private _labelPosition: LabelPosition = LabelPosition.After;

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

  get labelPosition(): LabelPosition {
    return this._labelPosition;
  }

  @Input()
  set labelPosition(value: LabelPosition) {
    this._labelPosition = value ?? LabelPosition.After;
  }

  @Input()
  public action: () => void;

  public get iconBeforeContent(): boolean {
    return this.icon && this.labelPosition === LabelPosition.After;
  }

  public get iconAfterContent(): boolean {
    return this.icon && this.labelPosition === LabelPosition.Before;
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
    this._icon = defaultIcon;
  }
}
