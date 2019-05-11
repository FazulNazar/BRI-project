import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedComponent } from './accepted.component';

describe('AcceptedComponent', () => {
  let component: AcceptedComponent;
  let fixture: ComponentFixture<AcceptedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
