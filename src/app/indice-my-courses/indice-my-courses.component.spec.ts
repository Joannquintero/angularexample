import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceMyCoursesComponent } from './indice-my-courses.component';

describe('IndiceMyCoursesComponent', () => {
  let component: IndiceMyCoursesComponent;
  let fixture: ComponentFixture<IndiceMyCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndiceMyCoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndiceMyCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
