import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerInjectionGraphComponent } from './power-injection-graph.component';

describe('PowerInjectionGraphComponent', () => {
  let component: PowerInjectionGraphComponent;
  let fixture: ComponentFixture<PowerInjectionGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerInjectionGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowerInjectionGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
