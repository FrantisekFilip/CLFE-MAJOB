import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentFinalScreenComponent } from './payment-final-screen.component';

describe('PaymentFinalScreenComponent', () => {
  let component: PaymentFinalScreenComponent;
  let fixture: ComponentFixture<PaymentFinalScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentFinalScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentFinalScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
