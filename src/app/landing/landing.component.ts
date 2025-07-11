import { Component, inject } from '@angular/core';
import { CoursesService } from '../courses.service';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { EnrollStudent } from '../course.model';
import { UserObject } from '../student.models';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [MatButtonModule, MatTableModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  displayedColumns: string[] = ['name', 'description', 'credits', 'action'];
  dataSource: any[] = [];
  viewMenu: Boolean = false;
  router = inject(Router);

  coursesServices = inject(CoursesService);
  courses: any[] = [];
  constructor() {
    this.coursesServices.getCourses().subscribe((response) => {
      this.courses = response;
      this.dataSource = response;
    });
  }

  requestCourse(id: number) {
    // Recuperar desde sessionStorage
    const userSession = sessionStorage.getItem('userSession');
    if (userSession) {
      const userObject: UserObject = JSON.parse(userSession);
      var enroll: EnrollStudent = {
        courseId: id,
        studentId: userObject.studentId,
      };
      this.coursesServices.requestCourse(enroll).subscribe(() => {
        this.router.navigate(['courses']);
      });
    } else {
      this.router.navigate(['students/register']);
    }
  }
}
