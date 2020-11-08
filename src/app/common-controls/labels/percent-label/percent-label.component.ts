import { Component, Input, OnInit, Output } from '@angular/core';
import { LabelComponent } from '../label/label.component';

@Component({
  selector: 'app-percent-label',
  templateUrl: './percent-label.component.html',
  styleUrls: ['./percent-label.component.scss']
})
export class PercentLabelComponent extends LabelComponent implements OnInit {
  @Input()
  public value: number;

  ngOnInit(): void {
    super.ngOnInit();
  }
}
