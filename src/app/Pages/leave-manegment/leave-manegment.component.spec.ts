import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveManegmentComponent } from './leave-manegment.component';

describe('LeaveManegmentComponent', () => {
  let component: LeaveManegmentComponent;
  let fixture: ComponentFixture<LeaveManegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveManegmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveManegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
