import { FocusMonitor } from '@angular/cdk/a11y';
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import {
  Attribute, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, Directive, ElementRef,
  forwardRef, Inject, InjectionToken, OnInit, Optional, QueryList, ViewEncapsulation
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatRadioButton, MatRadioDefaultOptions, MatRadioGroup, MAT_RADIO_DEFAULT_OPTIONS, _MatRadioButtonBase, _MatRadioGroupBase } from '@angular/material/radio';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';

export const BIG_RADIO_GROUP =
  new InjectionToken<BigRadioGroupDirective>('BigRadioGroup');

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[app-big-radio-group]',
  exportAs: 'bigRadioGroup',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BigRadioGroupDirective),
      multi: true
    },
    { provide: BIG_RADIO_GROUP, useExisting: BigRadioGroupDirective },
  ],
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    role: 'radiogroup',
    class: 'mat-radio-group',
  },
})
export class BigRadioGroupDirective extends MatRadioGroup {
  @ContentChildren(forwardRef(() => BigRadioButtonComponent), { descendants: true })
  _radios: QueryList<BigRadioButtonComponent>;
}

@Component({
  selector: 'app-big-radio-button',
  templateUrl: './big-radio-button.component.html',
  styleUrls: ['./big-radio-button.component.scss'],
  // tslint:disable-next-line: no-inputs-metadata-property
  inputs: ['disableRipple', 'tabIndex'],
  encapsulation: ViewEncapsulation.None,
  exportAs: 'matRadioButton',
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    class: 'big-radio-button',
    '[class.mat-radio-checked]': 'checked',
    '[class.mat-radio-disabled]': 'disabled',
    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
    '[class.mat-primary]': 'color === "primary"',
    '[class.mat-accent]': 'color === "accent"',
    '[class.mat-warn]': 'color === "warn"',
    // Needs to be -1 so the `focus` event still fires.
    '[attr.tabindex]': '-1',
    '[attr.id]': 'id',
    '[attr.aria-label]': 'null',
    '[attr.aria-labelledby]': 'null',
    '[attr.aria-describedby]': 'null',
    // Note: under normal conditions focus shouldn't land on this element, however it may be
    // programmatically set, for example inside of a focus trap, in this case we want to forward
    // the focus to the native element.
    '(focus)': '_inputElement.nativeElement.focus()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BigRadioButtonComponent extends MatRadioButton implements OnInit {

  constructor(
    @Optional() @Inject(BIG_RADIO_GROUP) radioGroup: BigRadioGroupDirective,
    elementRef: ElementRef,
    changeDetector: ChangeDetectorRef,
    focusMonitor: FocusMonitor,
    radioDispatcher: UniqueSelectionDispatcher,
    @Optional() @Inject(ANIMATION_MODULE_TYPE) animationMode?: string,
    @Optional() @Inject(MAT_RADIO_DEFAULT_OPTIONS)
    providerOverride?: MatRadioDefaultOptions,
    @Attribute('tabindex') tabIndex?: string) {
    super(radioGroup, elementRef, changeDetector, focusMonitor, radioDispatcher,
      animationMode, providerOverride, tabIndex);
  }

  ngOnInit(): void {
  }
}
