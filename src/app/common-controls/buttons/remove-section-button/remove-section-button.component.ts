import { Component, Input, OnInit } from '@angular/core';
import { SwitchButtonComponent } from '../switch-button/switch-button.component';

@Component({
  selector: 'app-remove-section-button',
  templateUrl: './remove-section-button.component.html',
  styleUrls: ['./remove-section-button.component.scss']
})
export class RemoveSectionButtonComponent extends SwitchButtonComponent implements OnInit {
  @Input()
  public callback: () => void;

  protected OnConstruct(): { defaultIcon: string } {
    return { defaultIcon: 'remove_circle' };
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
