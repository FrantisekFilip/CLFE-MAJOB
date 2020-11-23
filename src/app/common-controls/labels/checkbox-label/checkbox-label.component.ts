import { Component, Input, OnInit } from '@angular/core';
import { LabelPosition } from '../../label-position';
import { LabelDirective } from '../label.directive';

@Component({
  selector: 'app-checkbox-label',
  templateUrl: './checkbox-label.component.html',
  styleUrls: ['./checkbox-label.component.scss']
})
export class CheckboxLabelComponent extends LabelDirective implements OnInit {

  @Input()
  public checked: boolean;

  public get formatted(): string {
    return this.checked ? 'true' : 'false'; // TODO - localize
  }

  constructor() {
    super();
    this.labelPosition = LabelPosition.After;
  }

  ngOnInit(): void {
  }
}
