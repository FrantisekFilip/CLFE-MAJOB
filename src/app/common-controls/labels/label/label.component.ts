import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-label',
  template: ``,
  styles: []
})
export class LabelComponent implements OnInit {
  @Input()
  public label: string;

  ngOnInit(): void {
  }
}
