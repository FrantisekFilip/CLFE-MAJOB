import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-button',
  template: ``,
  styles: [
  ]
})
export class ActionButtonComponent implements OnInit {

  @Input()
  public action: () => void;

  constructor() { }

  ngOnInit(): void {
  }
}
