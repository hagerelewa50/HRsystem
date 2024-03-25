import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendemployeesalaryComponent } from './attendemployeesalary.component';

describe('AttendemployeesalaryComponent', () => {
  let component: AttendemployeesalaryComponent;
  let fixture: ComponentFixture<AttendemployeesalaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendemployeesalaryComponent]
    });
    fixture = TestBed.createComponent(AttendemployeesalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
