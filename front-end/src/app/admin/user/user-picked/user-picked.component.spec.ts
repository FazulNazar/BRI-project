import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPickedComponent } from './user-picked.component';

describe('UserPickedComponent', () => {
  let component: UserPickedComponent;
  let fixture: ComponentFixture<UserPickedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPickedComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPickedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
