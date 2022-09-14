import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman', 'Batman', 'Wolverine', 'Hulk'];
  borrado: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  BorrarHeroe(): void {
    this.borrado = this.heroes.pop() || '';
  }
}
