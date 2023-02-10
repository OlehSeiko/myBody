import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassageDetailsComponent } from './massage-details.component';

describe('MassageDetailsComponent', () => {
  let component: MassageDetailsComponent;
  let fixture: ComponentFixture<MassageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MassageDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MassageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
