import { Component, Input, OnInit } from '@angular/core';
import { SwitchButtonComponent } from '../switch-button/switch-button.component';

@Component({
  selector: 'app-add-section-button',
  templateUrl: './add-section-button.component.html',
  styleUrls: ['./add-section-button.component.scss']
})
export class AddSectionButtonComponent extends SwitchButtonComponent implements OnInit {
  @Input()
  public callback: () => void;

  protected OnConstruct(): { defaultIcon: string } {
    return { defaultIcon: 'add_circle' };
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
