import { Component, inject } from '@angular/core';
import { CoursesService } from '../courses.service';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { EnrollStudent } from '../course.model';
import { UserObject } from '../student.models';
import { environment } from '../../environments/environment';
import { CreditProgramService } from '../credit-program.service';
import { extractErrors } from '../extractErrors';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [MatButtonModule, MatTableModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  urlBase = environment.urlLocal;
  displayedColumns: string[] = ['name', 'description', 'credits', 'action'];
  dataSource: any[] = [];
  viewMenu: Boolean = false;
  router = inject(Router);
  credits: number = 0;
  disabled: boolean = false;

  coursesServices = inject(CoursesService);
  creditProgramService = inject(CreditProgramService);
  courses: any[] = [];
  errores: string[] = [];

  constructor() {
    this.coursesServices.getCourses().subscribe((response) => {
      this.courses = response;
      this.dataSource = response;
    });
  }

  ngOnInit(): void {
    const userSession = sessionStorage.getItem('userSession');
    if (userSession) {
      const userObject: UserObject = JSON.parse(userSession);
      this.creditProgramService
        .getCreditStudent(userObject.studentId)
        .subscribe((response) => {
          if (response != null) {
            this.credits = response.credits;
            if (this.credits < 3) {
              this.disabled = true;
            }
          } else {
            this.credits = 0;
          }
        });
    } else {
      this.credits = 0;
    }
  }

  requestCourse(id: number) {
    const userSession = sessionStorage.getItem('userSession');
    if (userSession) {
      const userObject: UserObject = JSON.parse(userSession);
      var enroll: EnrollStudent = {
        courseId: id,
        studentId: userObject.studentId,
      };

      this.coursesServices.requestCourse(enroll).subscribe({
        next: () => {
          this.router.navigate(['courses']);
          this.urlBase = environment.urlLocal + '/courses';
          window.location.href = this.urlBase;
        },
        error: (err) => {
          const errores = extractErrors(err);
          this.errores = errores;
          alert(errores[0]);
        },
      });
    } else {
      this.router.navigate(['students/register/' + id]);
    }
  }
}
