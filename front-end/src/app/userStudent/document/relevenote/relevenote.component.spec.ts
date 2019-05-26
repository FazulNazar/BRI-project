import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelevenoteComponent } from './relevenote.component';

describe('RelevenoteComponent', () => {
  let component: RelevenoteComponent;
  let fixture: ComponentFixture<RelevenoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelevenoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelevenoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
