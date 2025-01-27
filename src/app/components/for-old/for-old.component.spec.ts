import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForOldComponent } from './for-old.component';

describe('ForOldComponent', () => {
  let component: ForOldComponent;
  let fixture: ComponentFixture<ForOldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForOldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
