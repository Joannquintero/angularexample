import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }
  private http = inject(HttpClient);
  private URLbase = environment.apiURL + '/api/v1/Courses/GetAllAsync';

    public getCourses() {
    return this.http.get<any>(this.URLbase);
  }
}
