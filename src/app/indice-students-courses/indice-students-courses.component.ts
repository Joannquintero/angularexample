import { Component, inject } from '@angular/core';
import { IndiceStudentsCoursesService } from '../indice-students-courses.service';

@Component({
  selector: 'app-indice-students-courses',
  standalone: true,
  imports: [],
  templateUrl: './indice-students-courses.component.html',
  styleUrl: './indice-students-courses.component.css'
})
export class IndiceStudentsCoursesComponent {
 coursesServices = inject(IndiceStudentsCoursesService);
  students: any[] = [];
    constructor(){
    this.coursesServices.getCourses().subscribe(response => {
      this.students = response;
    });
  }
}
