import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCategoriesComponent } from './form-categories.component';

describe('FormCategoriesComponent', () => {
  let component: FormCategoriesComponent;
  let fixture: ComponentFixture<FormCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCategoriesComponent]
    });
    fixture = TestBed.createComponent(FormCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
