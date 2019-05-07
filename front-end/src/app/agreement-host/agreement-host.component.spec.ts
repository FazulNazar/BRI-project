import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementHostComponent } from './agreement-host.component';

describe('AgreementHostComponent', () => {
  let component: AgreementHostComponent;
  let fixture: ComponentFixture<AgreementHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgreementHostComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
