import { Component, inject, OnInit } from '@angular/core';
import { IndiceStudentsCoursesService } from '../indice-students-courses.service';
import { UserObject } from '../student.models';
import { ActivatedRoute } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-indice-students-courses',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './indice-students-courses.component.html',
  styleUrl: './indice-students-courses.component.css',
})
export class IndiceStudentsCoursesComponent implements OnInit {
  id: number = 0;

  coursesServices = inject(IndiceStudentsCoursesService);
  studentId: number = 0;
  dataSource: any[] = [];
  displayedColumns: string[] = ['estudiante', 'email', 'action'];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let value = this.route.snapshot.paramMap.get('id') || 0;
    this.id = Number(value);
    const userSession = sessionStorage.getItem('userSession');
    if (userSession) {
      const objUser: UserObject = JSON.parse(userSession);
      this.studentId = objUser.studentId;
    }
    this.coursesServices
      .getStudentsCourses(this.studentId, this.id)
      .subscribe((response) => {
        this.dataSource = response;
      });
  }
}
