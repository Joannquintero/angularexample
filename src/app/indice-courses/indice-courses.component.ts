import { Component, inject } from '@angular/core';
import { IndiceMyCoursesService } from '../indice-my-courses.service';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-indice-courses',
  standalone: true,
  imports: [MatButtonModule, MatTableModule],
  templateUrl: './indice-courses.component.html',
  styleUrl: './indice-courses.component.css',
})
export class IndiceCoursesComponent {
  displayedColumns: string[] = ['name', 'description', 'action'];
  dataSource: any[] = [];

  coursesServices = inject(IndiceMyCoursesService);
  constructor() {
    this.coursesServices.getCourses().subscribe((response) => {
      this.dataSource = response;
    });
  }
}
