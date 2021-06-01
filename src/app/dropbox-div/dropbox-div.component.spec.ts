import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropboxDivComponent } from './dropbox-div.component';

describe('DropboxDivComponent', () => {
  let component: DropboxDivComponent;
  let fixture: ComponentFixture<DropboxDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropboxDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropboxDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
