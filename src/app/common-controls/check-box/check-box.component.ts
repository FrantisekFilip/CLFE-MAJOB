import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss']
})
export class CheckBoxComponent implements OnInit {
  // TODO - replace with LabelPosition enum
  @Input()
  public labelPosition: 'before' | 'after' = 'before';

  @Input()
  public checked: boolean;

  @Input()
  public disabled: boolean;

  @Output()
  public readonly valueChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public onChange(value: any): void {
    this.valueChange.emit(value);
  }
}
