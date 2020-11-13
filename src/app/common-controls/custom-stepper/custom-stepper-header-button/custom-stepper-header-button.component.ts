import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-custom-stepper-header-button',
  templateUrl: './custom-stepper-header-button.component.html',
  styleUrls: ['./custom-stepper-header-button.component.scss']
})
export class CustomStepperHeaderButtonComponent implements OnInit {
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

  emitClick() {
    this.stepClick.emit();
  }
}
