import { Component, inject, OnInit } from '@angular/core';
import { IndiceStudentsService } from '../indice-students.service';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { UserObject } from '../student.models';

@Component({
  selector: 'app-indice-students',
  standalone: true,
  imports: [MatButtonModule, MatTableModule],
  templateUrl: './indice-students.component.html',
  styleUrl: './indice-students.component.css',
})
export class IndiceStudentsComponent implements OnInit {
  displayedColumns: string[] = ['estudiante', 'email', 'action'];
  dataSource: any[] = [];
  studentId: number = 0;

  coursesServices = inject(IndiceStudentsService);
  students: any[] = [];
  constructor() {
    this.coursesServices.getCourses(this.studentId).subscribe((response) => {
      this.students = response;
      this.dataSource = response;
    });
  }
  ngOnInit(): void {
    const userSession = sessionStorage.getItem('userSession');
    if (userSession) {
      const user: UserObject = JSON.parse(userSession);
      this.studentId = user.studentId;
    }
  }
}
