import { CursosService } from './../services/cursos.service';
import { Cursos } from './models/Cursos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: Cursos[]=[];
  displayedColumns = ['nome','categoria'];
  //cursosService: CursosService;

  constructor(private cursosService: CursosService) {


    //this.cursosService = new CursosService();
    this.cursos = this.cursosService.list();
   }

  ngOnInit(): void {
  }

}
