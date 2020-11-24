import { Directive, Input } from '@angular/core';
import { LabelPosition } from '../label-position';

@Directive()
export abstract class LabelDirective {
  private _labelPosition: LabelPosition;

  public get labelPosition(): LabelPosition {
    return this._labelPosition ?? LabelPosition.Before;
  }

  @Input()
  public set labelPosition(value: LabelPosition) {
    this._labelPosition = value;
  }

  public abstract get formatted(): string;

  public get labelBeforeValue(): boolean {
    return this.labelPosition === LabelPosition.Before;
  }

  public get labelAfterValue(): boolean {
    return this.labelPosition === LabelPosition.After;
  }

  constructor() { }
}
