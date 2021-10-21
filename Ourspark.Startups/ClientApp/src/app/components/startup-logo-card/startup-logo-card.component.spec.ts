import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupLogoCardComponent } from './startup-logo-card.component';

describe('StartupLogoCardComponent', () => {
  let component: StartupLogoCardComponent;
  let fixture: ComponentFixture<StartupLogoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupLogoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupLogoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
