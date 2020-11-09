import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-action-button',
  template: ``,
  styles: [
  ]
})
export class ActionButtonComponent implements OnInit {

  @Input()
  public action: () => void;

  @Output() newEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(e) {
    this.newEvent.emit('emitted');
  }
}
