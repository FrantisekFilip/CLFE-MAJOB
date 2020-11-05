import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationEmployeeWizardComponent } from './application-employee-wizard.component';

describe('ApplicationEmployeeWizardComponent', () => {
  let component: ApplicationEmployeeWizardComponent;
  let fixture: ComponentFixture<ApplicationEmployeeWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationEmployeeWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationEmployeeWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
