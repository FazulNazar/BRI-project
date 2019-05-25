import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuStudentComponent } from './menu-student.component';

describe('MenuStudentComponent', () => {
  let component: MenuStudentComponent;
  let fixture: ComponentFixture<MenuStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
