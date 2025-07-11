import { Component, inject } from '@angular/core';
import { IndiceMyCoursesService } from '../indice-my-courses.service';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { UserObject } from '../student.models';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-indice-courses',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, RouterLink],
  templateUrl: './indice-courses.component.html',
  styleUrl: './indice-courses.component.css',
})
export class IndiceCoursesComponent {
  displayedColumns: string[] = ['name', 'action'];
  dataSource: any[] = [];
  studentId: number = 0;
  router = inject(Router);

  coursesServices = inject(IndiceMyCoursesService);
  constructor() {
    const userSession = sessionStorage.getItem('userSession');
    if (userSession) {
      const objUser: UserObject = JSON.parse(userSession);
      this.studentId = objUser.studentId;
    }

    this.coursesServices.getCourses(this.studentId).subscribe((response) => {
      this.dataSource = response;
    });
  }
}
