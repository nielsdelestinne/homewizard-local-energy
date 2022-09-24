import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPowerComponent } from './total-power.component';

describe('TotalEnergyComponent', () => {
  let component: TotalPowerComponent;
  let fixture: ComponentFixture<TotalPowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalPowerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalPowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
