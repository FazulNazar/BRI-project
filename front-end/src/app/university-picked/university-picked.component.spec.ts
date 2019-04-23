import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityPickedComponent } from './university-picked.component';

describe('UniversityPickedComponent', () => {
  let component: UniversityPickedComponent;
  let fixture: ComponentFixture<UniversityPickedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityPickedComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityPickedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
