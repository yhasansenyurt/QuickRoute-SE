import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierOrderComponent } from './courier-order.component';

describe('CourierOrderComponent', () => {
  let component: CourierOrderComponent;
  let fixture: ComponentFixture<CourierOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourierOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourierOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
