import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { IndiceCoursesComponent } from './indice-courses/indice-courses.component';
import { IndiceStudentsComponent } from './indice-students/indice-students.component';
import { IndiceCreditProgramComponent } from './indice-credit-program/indice-credit-program.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { IndiceStudentsCoursesComponent } from './indice-students-courses/indice-students-courses.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'courses', component: IndiceCoursesComponent },
  { path: 'students', component: IndiceStudentsComponent },
  { path: 'credits', component: IndiceCreditProgramComponent },
  { path: 'students/register/:id', component: RegisterStudentComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'studentsCourses/:id', component: IndiceStudentsCoursesComponent },
];
