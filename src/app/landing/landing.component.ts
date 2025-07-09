import { Component, inject } from '@angular/core';
import { CoursesService } from '../courses.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [MatButtonModule, RouterLink, MatTableModule ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  displayedColumns: string[] = ['name', 'description', 'credits', 'action'];
  dataSource: any[] = []
  viewMenu: Boolean = false;

  coursesServices = inject(CoursesService);
  courses: any[] = [];
    constructor(){
    this.coursesServices.getCourses().subscribe(response => {
      this.courses = response;
      this.dataSource = response
    });
  }
}
