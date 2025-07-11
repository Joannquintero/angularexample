import { Component, inject, OnInit } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink } from '@angular/router';
import { UserObject } from '../student.models';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  fullName?: string;
  isAuthenticated: boolean = false;
  router = inject(Router);

  ngOnInit(): void {
    const userSession = sessionStorage.getItem('userSession');
    if (userSession) {
      const objUsuario: UserObject = JSON.parse(userSession);
      this.fullName = objUsuario.fullName;
      this.isAuthenticated = true;
    }
  }

  exitSession() {
    sessionStorage.clear();
    this.fullName = '';
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }
}
