import { Cursos } from './models/Cursos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: Cursos[];
  displayedColumns = ['nome','categoria'];

  constructor() {
    this.cursos = [
      {_id:'1',nome:'Angular',categoria:'Front End'},
      {_id:'2',nome:'Spring',categoria:'Back End'}
    ];
   }

  ngOnInit(): void {
  }

}
