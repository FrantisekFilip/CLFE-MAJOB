import {Component, Input, OnInit} from '@angular/core';
import {CdkStepper} from '@angular/cdk/stepper';

@Component({
  selector: 'app-custom-stepper',
  templateUrl: './custom-stepper.component.html',
  styleUrls: ['./custom-stepper.component.scss'],
  providers: [{provide: CdkStepper, useExisting: CustomStepperComponent}]
})
export class CustomStepperComponent extends CdkStepper {
  @Input()
  public headerDescription: string;

  @Input()
  public headerWidth = '30%';

  @Input()
  public contentWidth = '70%';

  onClick(index: number): void {
    this.selectedIndex = index;
  }

  isActive(index: number): boolean {
    return this.selectedIndex === index;
  }
}
