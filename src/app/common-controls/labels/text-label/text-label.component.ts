import { Component, Input, OnInit } from '@angular/core';
import { LabelComponent } from '../label/label.component';

@Component({
  selector: 'app-text-label',
  templateUrl: './text-label.component.html',
  styleUrls: ['./text-label.component.scss']
})
export class TextLabelComponent extends LabelComponent implements OnInit {
  @Input()
  public value: string;

  ngOnInit(): void {
    super.ngOnInit();
  }
}
