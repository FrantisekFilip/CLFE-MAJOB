import { MatStepper, matStepperAnimations, MatVerticalStepper } from '@angular/material/stepper';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Directionality } from '@angular/cdk/bidi';
import { ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CdkStepper } from '@angular/cdk/stepper';
import { ViewEncapsulation } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-vertical-stepper',
  templateUrl: './vertical-stepper.component.html',
  styleUrls: ['./vertical-stepper.component.scss'],
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    class: 'mat-stepper-vertical',
    'aria-orientation': 'vertical',
    role: 'tablist',
  },
  animations: [matStepperAnimations.verticalStepTransition],
  providers: [
    { provide: MatStepper, useExisting: VerticalStepperComponent },
    { provide: CdkStepper, useExisting: VerticalStepperComponent }
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerticalStepperComponent extends MatVerticalStepper implements OnInit {

  constructor(
    @Optional() dir: Directionality,
    changeDetectorRef: ChangeDetectorRef,
    elementRef?: ElementRef<HTMLElement>,
    @Inject(DOCUMENT) _document?: any) {
    super(dir, changeDetectorRef, elementRef, _document);
  }

  ngOnInit(): void {
  }
}
