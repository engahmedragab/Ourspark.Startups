import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateIndicatorComponent } from './rate-indicator.component';

describe('RateIndicatorComponent', () => {
  let component: RateIndicatorComponent;
  let fixture: ComponentFixture<RateIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
