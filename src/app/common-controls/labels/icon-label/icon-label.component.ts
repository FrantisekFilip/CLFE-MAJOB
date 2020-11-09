import { Component, Input, OnInit } from '@angular/core';
import { LabelComponent } from './../label/label.component';

@Component({
  selector: 'app-icon-label',
  templateUrl: './icon-label.component.html',
  styleUrls: ['./icon-label.component.scss']
})
export class IconLabelComponent extends LabelComponent implements OnInit {
  @Input()
  public icon: string;

  ngOnInit(): void {
    super.ngOnInit();
  }
}
