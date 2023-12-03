import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppareilComponent } from './appareil.component';

describe('AppareilComponent', () => {
  let component: AppareilComponent;
  let fixture: ComponentFixture<AppareilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppareilComponent]
    });
    fixture = TestBed.createComponent(AppareilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
