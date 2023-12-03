import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAppareilComponent } from './form-appareil.component';

describe('FormAppareilComponent', () => {
  let component: FormAppareilComponent;
  let fixture: ComponentFixture<FormAppareilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAppareilComponent]
    });
    fixture = TestBed.createComponent(FormAppareilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
