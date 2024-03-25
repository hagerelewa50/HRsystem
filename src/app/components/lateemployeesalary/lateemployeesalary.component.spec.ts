import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateemployeesalaryComponent } from './lateemployeesalary.component';

describe('LateemployeesalaryComponent', () => {
  let component: LateemployeesalaryComponent;
  let fixture: ComponentFixture<LateemployeesalaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LateemployeesalaryComponent]
    });
    fixture = TestBed.createComponent(LateemployeesalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
