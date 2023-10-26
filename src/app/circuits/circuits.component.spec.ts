import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitsComponent } from './circuits.component';

describe('CircuitsComponent', () => {
  let component: CircuitsComponent;
  let fixture: ComponentFixture<CircuitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CircuitsComponent]
    });
    fixture = TestBed.createComponent(CircuitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
