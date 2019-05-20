import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPinnaComponent } from './admin-pinna.component';

describe('AdminPinnaComponent', () => {
  let component: AdminPinnaComponent;
  let fixture: ComponentFixture<AdminPinnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPinnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPinnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
