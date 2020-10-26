import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenCalculationFormComponent } from './citizen-calculation-form.component';

describe('CitizenCalculationFormComponent', () => {
  let component: CitizenCalculationFormComponent;
  let fixture: ComponentFixture<CitizenCalculationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitizenCalculationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenCalculationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
