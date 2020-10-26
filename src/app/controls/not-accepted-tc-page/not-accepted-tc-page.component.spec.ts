import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAcceptedTcPageComponent } from './not-accepted-tc-page.component';

describe('NotAcceptedTcPageComponent', () => {
  let component: NotAcceptedTcPageComponent;
  let fixture: ComponentFixture<NotAcceptedTcPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotAcceptedTcPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotAcceptedTcPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
