import { Component, inject } from '@angular/core';
import { IndiceStudentsService } from '../indice-students.service';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-indice-students',
  standalone: true,
  imports: [MatButtonModule, MatTableModule],
  templateUrl: './indice-students.component.html',
  styleUrl: './indice-students.component.css',
})
export class IndiceStudentsComponent {
  displayedColumns: string[] = ['estudiante', 'email', 'action'];
  dataSource: any[] = [];

  coursesServices = inject(IndiceStudentsService);
  students: any[] = [];
  constructor() {
    this.coursesServices.getCourses().subscribe((response) => {
      this.students = response;
      this.dataSource = response;
    });
  }
}
