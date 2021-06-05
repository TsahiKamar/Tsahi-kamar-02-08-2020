import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuroReportComponent } from './euro-report.component';

describe('EuroReportComponent', () => {
  let component: EuroReportComponent;
  let fixture: ComponentFixture<EuroReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuroReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuroReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
