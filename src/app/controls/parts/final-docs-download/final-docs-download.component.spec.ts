import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalDocsDownloadComponent } from './final-docs-download.component';

describe('FinalDocsDownloadComponent', () => {
  let component: FinalDocsDownloadComponent;
  let fixture: ComponentFixture<FinalDocsDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalDocsDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalDocsDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
