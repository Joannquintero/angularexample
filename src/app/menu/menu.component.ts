import { Component, inject, OnInit } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink } from '@angular/router';
import { UserObject } from '../student.models';
import { MatCardModule } from '@angular/material/card';
import { CreditProgramService } from '../credit-program.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    MatCardModule,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  email?: string;
  isAuthenticated: boolean = false;
  router = inject(Router);
  creditProgramService = inject(CreditProgramService);
  credits: number = 0;
  urlBase = environment.urlLocal;

  ngOnInit(): void {
    const userSession = sessionStorage.getItem('userSession');
    if (userSession) {
      const objUser: UserObject = JSON.parse(userSession);
      this.email = objUser.email;
      this.isAuthenticated = true;

      this.creditProgramService
        .getCreditStudent(objUser.studentId)
        .subscribe((response) => {
          if (response != null) {
            this.credits = response.credits;
          } else {
            this.credits = 0;
          }
        });
    }
  }

  exitSession() {
    sessionStorage.clear();
    this.email = '';
    this.isAuthenticated = false;
    window.location.href = this.urlBase;
  }
}
