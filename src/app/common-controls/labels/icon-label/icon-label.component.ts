import { Component, Input, OnInit } from '@angular/core';
import { LabelDirective } from '../label.directive';

@Component({
  selector: 'app-icon-label',
  templateUrl: './icon-label.component.html',
  styleUrls: ['./icon-label.component.scss']
})
export class IconLabelComponent extends LabelDirective implements OnInit {
  @Input()
  public icon: string;

  public get formatted(): string {
    return this.icon;
  }

  ngOnInit(): void {
  }
}
