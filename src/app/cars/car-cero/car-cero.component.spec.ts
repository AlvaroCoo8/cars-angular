import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCeroComponent } from './car-cero.component';

describe('CarCeroComponent', () => {
  let component: CarCeroComponent;
  let fixture: ComponentFixture<CarCeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarCeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarCeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
