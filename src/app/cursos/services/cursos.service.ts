import { Injectable } from '@angular/core';
import { Cursos } from '../cursos/models/Cursos';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private httpClient: HttpClient) { }

  list(): Cursos[]{

    return [
      { _id: '1', nome: 'Angular', categoria: 'Front End' },
      { _id: '2', nome: 'Spring', categoria: 'Back End' }
    ];
  }
}
