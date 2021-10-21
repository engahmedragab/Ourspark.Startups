import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupAddComponent } from './startup-add.component';

describe('StartupAddComponent', () => {
  let component: StartupAddComponent;
  let fixture: ComponentFixture<StartupAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
