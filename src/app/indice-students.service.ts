import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IndiceStudentsService {
  constructor() {}
  private http = inject(HttpClient);
  private URLbase = environment.apiURL + '/api/v1/Students/GetAsync?Id=';

  public getCourses(id: number) {
    return this.http.get<any>(this.URLbase + id);
  }
}
