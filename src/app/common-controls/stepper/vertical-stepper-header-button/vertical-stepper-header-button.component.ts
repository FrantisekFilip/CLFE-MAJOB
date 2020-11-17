import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-vertical-stepper-header-button',
  templateUrl: './vertical-stepper-header-button.component.html',
  styleUrls: ['./vertical-stepper-header-button.component.scss']
})
export class VerticalStepperHeaderButtonComponent implements OnInit {
  get active(): boolean {
    return this._active;
  }

  @Input()
  set active(value: boolean) {
    this._active = value;
  }

  @Input()
  public last: boolean;

  @Output()
  public stepClick = new EventEmitter<void>();

  private _active = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  emitClick(): void {
    this.stepClick.emit();
  }
}
