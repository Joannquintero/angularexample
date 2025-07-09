import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceCreditProgramComponent } from './indice-credit-program.component';

describe('IndiceCreditProgramComponent', () => {
  let component: IndiceCreditProgramComponent;
  let fixture: ComponentFixture<IndiceCreditProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndiceCreditProgramComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndiceCreditProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
