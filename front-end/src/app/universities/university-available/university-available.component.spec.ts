import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityAvailableComponent } from './university-available.component';

describe('UniversityAvailableComponent', () => {
  let component: UniversityAvailableComponent;
  let fixture: ComponentFixture<UniversityAvailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityAvailableComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
