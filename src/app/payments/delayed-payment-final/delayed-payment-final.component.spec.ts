import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayedPaymentFinalComponent } from './delayed-payment-final.component';

describe('DelayedPaymentFinalComponent', () => {
  let component: DelayedPaymentFinalComponent;
  let fixture: ComponentFixture<DelayedPaymentFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelayedPaymentFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelayedPaymentFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
