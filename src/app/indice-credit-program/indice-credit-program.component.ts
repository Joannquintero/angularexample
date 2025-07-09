import { Component, inject } from '@angular/core';
import { IndiceCreditProgramService } from '../indice-credit-program.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-indice-credit-program',
  standalone: true,
  imports: [ MatButtonModule, RouterLink, MatTableModule ],
  templateUrl: './indice-credit-program.component.html',
  styleUrl: './indice-credit-program.component.css'
})
export class IndiceCreditProgramComponent {
 displayedColumns: string[] = ['name', 'credit', 'price'];
  dataSource: any[] = []
  formatMoney = new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
      });

 creditProgramService = inject(IndiceCreditProgramService);
  creditPrograms: any[] = [];
    constructor(){
    this.creditProgramService.getCourses().subscribe(response => {
      this.creditPrograms = response;
      this.dataSource = response;
    });
  }
}
