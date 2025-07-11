import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalServiceService {
  constructor() {}

  public globalProperty: string = 'Valor inicial';
  public globalMenur: Boolean = false;
  public idStudent: number = 0;
}
