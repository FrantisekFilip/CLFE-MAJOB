import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { LabelComponent } from '../../labels/label/label.component';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent extends LabelComponent implements OnInit {
  @Input()
  public labelPosition: 'before' | 'after';

  @Input()
  public checked: boolean;

  @Input()
  public disabled: boolean;

  @Output()
  public readonly valueChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  public onChange(value: MatCheckboxChange): void {
    this.valueChange.emit(value.checked);
  }
}
