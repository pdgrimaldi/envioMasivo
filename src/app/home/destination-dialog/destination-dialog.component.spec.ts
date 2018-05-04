import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationDialogComponent } from './destination-dialog.component';

describe('DestinationDialogComponent', () => {
  let component: DestinationDialogComponent;
  let fixture: ComponentFixture<DestinationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
