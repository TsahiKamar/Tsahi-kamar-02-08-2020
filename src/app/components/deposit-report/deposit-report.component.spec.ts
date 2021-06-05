import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositReportComponent } from './deposit-report.component';

describe('DepositReportComponent', () => {
  let component: DepositReportComponent;
  let fixture: ComponentFixture<DepositReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
