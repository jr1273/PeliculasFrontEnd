
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { ListadogenericoComponent } from "../../compartidos/componentes/listadogenerico/listadogenerico.component";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { PeliculasService } from '../peliculas.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
@Component({
  selector: 'app-listado-peliculas',
  standalone:true,
  imports: [ListadogenericoComponent,MatButtonModule, MatIconModule,RouterLink, SweetAlert2Module],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent  {
 

@Input({ required: true })
  peliculas!: any[];

  peliculasService = inject(PeliculasService);

  @Output()
  borrado = new EventEmitter<void>();

  borrar(id: number){
    this.peliculasService.borrar(id)
      .subscribe(() => this.borrado.emit())
  }

}


