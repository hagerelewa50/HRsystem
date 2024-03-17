import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSettingsComponent } from './public-settings.component';

describe('PublicSettingsComponent', () => {
  let component: PublicSettingsComponent;
  let fixture: ComponentFixture<PublicSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicSettingsComponent]
    });
    fixture = TestBed.createComponent(PublicSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
