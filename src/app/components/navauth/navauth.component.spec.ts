import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavauthComponent } from './navauth.component';

describe('NavauthComponent', () => {
  let component: NavauthComponent;
  let fixture: ComponentFixture<NavauthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavauthComponent]
    });
    fixture = TestBed.createComponent(NavauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
