import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IndiceStudentsCoursesService {
  constructor() {}
  private http = inject(HttpClient);
  private URLbase = environment.apiURL + '/api/v1/Students/StudentsCourseAsync';

  public getStudentsCourses(studentId: number, courseId: number) {
    let url = this.URLbase + '?Filter=' + studentId;
    if (courseId > 0) {
      url = url + '&id=' + courseId;
    }
    return this.http.get<any>(url);
  }
}
