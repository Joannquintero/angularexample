import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceCoursesComponent } from './indice-courses.component';

describe('IndiceCoursesComponent', () => {
  let component: IndiceCoursesComponent;
  let fixture: ComponentFixture<IndiceCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndiceCoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndiceCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
