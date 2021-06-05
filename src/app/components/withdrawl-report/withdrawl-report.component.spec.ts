import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawlReportComponent } from './withdrawl-report.component';

describe('WithdrawlReportComponent', () => {
  let component: WithdrawlReportComponent;
  let fixture: ComponentFixture<WithdrawlReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithdrawlReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawlReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
