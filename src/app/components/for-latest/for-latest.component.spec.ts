import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForLatestComponent } from './for-latest.component';

describe('ForLatestComponent', () => {
  let component: ForLatestComponent;
  let fixture: ComponentFixture<ForLatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForLatestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
