import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTwoComponent } from './car-two.component';

describe('CarTwoComponent', () => {
  let component: CarTwoComponent;
  let fixture: ComponentFixture<CarTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
