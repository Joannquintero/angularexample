import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { EnrollStudent } from './course.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor() {}
  private http = inject(HttpClient);
  private URLbase = environment.apiURL + '/api/v1/Courses/GetAllAsync';
  private requestUrlBase = environment.apiURL + '/api/v1/Courses/EnrollAsync';

  public getCourses() {
    return this.http.get<any>(this.URLbase);
  }

  public requestCourse(enroll: EnrollStudent) {
    return this.http.post(this.requestUrlBase, enroll);
  }
}
