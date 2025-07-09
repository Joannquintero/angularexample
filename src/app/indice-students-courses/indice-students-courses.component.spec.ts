import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceStudentsCoursesComponent } from './indice-students-courses.component';

describe('IndiceStudentsCoursesComponent', () => {
  let component: IndiceStudentsCoursesComponent;
  let fixture: ComponentFixture<IndiceStudentsCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndiceStudentsCoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndiceStudentsCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
