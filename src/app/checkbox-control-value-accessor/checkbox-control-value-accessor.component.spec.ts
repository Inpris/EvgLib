import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxControlValueAccessorComponent } from './checkbox-control-value-accessor.component';

describe('CheckboxControlValueAccessorComponent', () => {
  let component: CheckboxControlValueAccessorComponent;
  let fixture: ComponentFixture<CheckboxControlValueAccessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxControlValueAccessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxControlValueAccessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
