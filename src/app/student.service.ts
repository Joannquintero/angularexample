import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { StudentCreate, StudentCredit, UserCreate } from './student.models';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {}

  private http = inject(HttpClient);
  private userURLbase = environment.apiURL + '/api/v1/Account/InsertAsync';
  private studentsURLbase = environment.apiURL + '/api/v1/Students/InsertAsync';
  private CreditURLbase = environment.apiURL + '/api/v1/Credits/InsertAsync';

  public createUser(user: UserCreate) {
    return this.http.post(this.userURLbase, user);
  }

  public create(student: StudentCreate) {
    return this.http.post(this.studentsURLbase, student);
  }

  public insertCredit(credit: StudentCredit) {
    return this.http.post(this.CreditURLbase, credit);
  }
}
