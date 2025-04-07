
import { Component, Input, OnInit } from '@angular/core';
import { ListadogenericoComponent } from "../../compartidos/componentes/listadogenerico/listadogenerico.component";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-listado-peliculas',
  standalone:true,
  imports: [ListadogenericoComponent,MatButtonModule, MatIconModule],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent implements OnInit {
  ngOnInit(): void {

    }
  title = 'peliculas';
  @Input({required: true })
peliculas! : any[];


}
