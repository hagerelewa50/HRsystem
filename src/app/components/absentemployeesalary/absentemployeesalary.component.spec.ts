import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsentemployeesalaryComponent } from './absentemployeesalary.component';

describe('AbsentemployeesalaryComponent', () => {
  let component: AbsentemployeesalaryComponent;
  let fixture: ComponentFixture<AbsentemployeesalaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbsentemployeesalaryComponent]
    });
    fixture = TestBed.createComponent(AbsentemployeesalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
