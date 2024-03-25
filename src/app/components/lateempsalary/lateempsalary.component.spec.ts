import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateempsalaryComponent } from './lateempsalary.component';

describe('LateempsalaryComponent', () => {
  let component: LateempsalaryComponent;
  let fixture: ComponentFixture<LateempsalaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LateempsalaryComponent]
    });
    fixture = TestBed.createComponent(LateempsalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
