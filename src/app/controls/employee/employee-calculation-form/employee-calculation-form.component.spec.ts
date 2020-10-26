import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCalculationFormComponent } from './employee-calculation-form.component';

describe('EmployeeCalculationFormComponent', () => {
  let component: EmployeeCalculationFormComponent;
  let fixture: ComponentFixture<EmployeeCalculationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeCalculationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeCalculationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
