import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassageServiceComponent } from './massage-service.component';

describe('MassageServiceComponent', () => {
  let component: MassageServiceComponent;
  let fixture: ComponentFixture<MassageServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MassageServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MassageServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
