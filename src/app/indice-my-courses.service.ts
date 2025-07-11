import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IndiceMyCoursesService {
  constructor() {}
  private http = inject(HttpClient);
  private URLbase = environment.apiURL + '/api/v2/Courses/GetCoursesAsync?Id=';

  public getCourses(id: number) {
    return this.http.get<any>(this.URLbase + id);
  }
}
