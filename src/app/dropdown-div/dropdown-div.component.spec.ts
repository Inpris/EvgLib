import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownDivComponent } from './dropdown-div.component';

describe('DropboxDivComponent', () => {
  let component: DropdownDivComponent;
  let fixture: ComponentFixture<DropdownDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
