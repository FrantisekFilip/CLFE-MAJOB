import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsDownloadComponent } from './terms-download.component';

describe('TermsDownloadComponent', () => {
  let component: TermsDownloadComponent;
  let fixture: ComponentFixture<TermsDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
