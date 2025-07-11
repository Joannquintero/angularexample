import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { creditUser } from './credit.model';

@Injectable({
  providedIn: 'root',
})
export class CreditProgramService {
  constructor() {}
  private http = inject(HttpClient);
  private URLbase = environment.apiURL + '/api/v1/Credits/InsertAsync';
  private getUrlbase =
    environment.apiURL + '/api/v1/Credits/GetStudentCreditsAsync?Id=';

  public getCreditStudent(id: number) {
    return this.http.get<any>(this.getUrlbase + id);
  }

  public insert(credit: creditUser) {
    return this.http.post(this.URLbase, credit);
  }
}
