import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationCitizenWizardComponent } from './application-citizen-wizard.component';

describe('ApplicationCitizenWizardComponent', () => {
  let component: ApplicationCitizenWizardComponent;
  let fixture: ComponentFixture<ApplicationCitizenWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationCitizenWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationCitizenWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
