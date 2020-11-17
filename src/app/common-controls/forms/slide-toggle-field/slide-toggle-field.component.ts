import { Component, Input, OnInit } from '@angular/core';
import { FormFieldDirective } from '../form-field.directive';

@Component({
  selector: 'app-slide-toggle-field',
  templateUrl: './slide-toggle-field.component.html',
  styleUrls: ['./slide-toggle-field.component.scss']
})
export class SlideToggleFieldComponent extends FormFieldDirective implements OnInit {
  @Input()
  public checked: boolean;

  @Input()
  public labelPosition: 'before' | 'after';

  ngOnInit(): void {
  }
}
