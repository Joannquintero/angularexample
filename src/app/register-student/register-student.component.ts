import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  StudentCreate,
  StudentCredit,
  UserCreate,
  UserObject,
  UserToken,
} from '../student.models';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { GlobalServiceService } from '../global-service.service';

@Component({
  selector: 'app-register-student',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './register-student.component.html',
  styleUrl: './register-student.component.css',
})
export class RegisterStudentComponent {
  private readonly formBuilder = inject(FormBuilder);
  studentService = inject(StudentService);
  globalServiceService = inject(GlobalServiceService);
  userResponse: any = null;

  router = inject(Router);

  form = this.formBuilder.group({
    Name: [''],
    SecondName: [''],
    LastName: [''],
    SecondLastName: [''],
    Email: [''],
    Password: [''],
    ConfirmPassword: [''],
  });

  saveChanges() {
    let user = this.form.value as UserCreate;
    this.studentService.createUser(user).subscribe((response) => {
      var userToken = response as UserToken;

      let student = this.form.value as StudentCreate;
      student.UserId = userToken.id;
      this.studentService.create(student).subscribe((response) => {
        this.userResponse = response;
        var StudentCredit: StudentCredit = {
          StudentId: userToken.id,
          Credits: 0,
        };

        this.globalServiceService.idStudent = StudentCredit.StudentId;
        this.studentService.insertCredit(StudentCredit).subscribe(() => {
          const userObject: UserObject = {
            id: student.UserId,
            fullName: user.Name + ' ' + user.LastName,
            email: user.Email,
            studentId: StudentCredit.StudentId,
            token: userToken.token,
          };

          sessionStorage.setItem('userSession', JSON.stringify(userObject));
          this.router.navigate(['courses']);
        });
      });
    });
  }
}
