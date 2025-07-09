import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { StudentCreate, StudentCredit, UserCreate } from '../student.models';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-student',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './register-student.component.html',
  styleUrl: './register-student.component.css'
})
export class RegisterStudentComponent {
private readonly formBuilder = inject(FormBuilder);
studentService = inject(StudentService);
router =  inject(Router);

form = this.formBuilder.group({
  Name: [''],
  SecondName: [''],
  LastName: [''],
  SecondLastName: [''],
  Email: [''],
  Password: [''],
  ConfirmPassword: ['']
})

saveChanges(){
let user = this.form.value as UserCreate;
this.studentService.createUser(user).subscribe((response) => {
  var result = response as UserCreate;

  let student = this.form.value as StudentCreate;
  student.UserId = result.id
  this.studentService.create(student).subscribe(() => {

    var StudentCredit: StudentCredit = {
      StudentId: result.id,
      Credits: 0
    };

    this.studentService.insertCredit(StudentCredit).subscribe(() => {
    this.router.navigate(['students']);
    });
    
    });
  })}
}
