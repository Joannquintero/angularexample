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
import { environment } from '../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../courses.service';
import { EnrollStudent } from '../course.model';

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
  urlBase = environment.urlLocal;
  id: number = 0;
  coursesServices = inject(CoursesService);

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let value = this.route.snapshot.paramMap.get('id') || 0;
    this.id = Number(value);
  }

  saveChanges() {
    let user = this.form.value as UserCreate;

    // Se crea el usuario
    this.studentService.createUser(user).subscribe((response) => {
      var userToken = response as UserToken;

      let student = this.form.value as StudentCreate;
      student.UserId = userToken.id;

      // Se crea el estudiante
      this.studentService.create(student).subscribe((response) => {
        this.userResponse = response;
        var studentCreate = response as StudentCreate;

        var StudentCredit: StudentCredit = {
          StudentId: studentCreate.id,
          Credits: 3,
        };

        this.globalServiceService.idStudent = StudentCredit.StudentId;

        // Se crea creditos de estudiante
        this.studentService.insertCredit(StudentCredit).subscribe(() => {
          const userObject: UserObject = {
            id: student.UserId,
            fullName: user.Name + ' ' + user.LastName,
            email: user.Email,
            studentId: StudentCredit.StudentId,
            token: userToken.token,
          };

          var enroll: EnrollStudent = {
            courseId: this.id,
            studentId: userObject.studentId,
          };

          this.coursesServices.requestCourse(enroll).subscribe(() => {
            sessionStorage.setItem('userSession', JSON.stringify(userObject));
            window.location.href = this.urlBase;
          });
        });
      });
    });
  }
}
