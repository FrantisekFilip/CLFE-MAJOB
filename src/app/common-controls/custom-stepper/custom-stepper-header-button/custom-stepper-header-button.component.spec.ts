import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomStepperHeaderButtonComponent } from './custom-stepper-header-button.component';

describe('CustomStepperHeaderButtonComponent', () => {
  let component: CustomStepperHeaderButtonComponent;
  let fixture: ComponentFixture<CustomStepperHeaderButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomStepperHeaderButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomStepperHeaderButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
