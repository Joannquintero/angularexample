import { Component, inject } from '@angular/core';
import { IndiceCreditProgramService } from '../indice-credit-program.service';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { UserObject } from '../student.models';
import { creditUser } from '../credit.model';
import { CreditProgramService } from '../credit-program.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-indice-credit-program',
  standalone: true,
  imports: [MatButtonModule, MatTableModule],
  templateUrl: './indice-credit-program.component.html',
  styleUrl: './indice-credit-program.component.css',
})
export class IndiceCreditProgramComponent {
  urlBase = environment.urlLocal;
  displayedColumns: string[] = ['name', 'credit', 'price', 'action'];
  dataSource: any[] = [];
  formatMoney = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  });

  router = inject(Router);

  creditProgramService = inject(IndiceCreditProgramService);
  creditAddProgramService = inject(CreditProgramService);
  creditPrograms: any[] = [];
  constructor() {
    this.creditProgramService.getCourses().subscribe((response) => {
      this.creditPrograms = response;
      this.dataSource = response;
    });
  }

  requestProgramCredit(credit: number) {
    const userSession = sessionStorage.getItem('userSession');
    if (userSession) {
      const userObject: UserObject = JSON.parse(userSession);
      var creditObject: creditUser = {
        credits: credit,
        studentId: userObject.studentId,
      };
      this.creditAddProgramService.insert(creditObject).subscribe(() => {
        this.router.navigate(['']);
        window.location.href = this.urlBase;
      });
    }
  }
}
