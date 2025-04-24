import { Component, inject, OnInit } from '@angular/core';
import { RatingComponent } from "../compartidos/componentes/rating/rating.component";
import { ListadoPeliculasComponent } from "../peliculas/listado-peliculas/listado-peliculas.component";
import { PeliculasService } from '../peliculas/peliculas.service';

@Component({
  selector: 'app-landing-page',
  imports: [ ListadoPeliculasComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent  {

  
  peliculasService = inject(PeliculasService);

  constructor(){
    this.cargarPeliculas();
  }

  peliculaBorrada(){
    this.cargarPeliculas();
  }

  cargarPeliculas(){
    this.peliculasService.obtenerLandingPage().subscribe(modelo => {
      this.peliculasEnCines = modelo.enCines;
      this.peliculasProximosEstrenos = modelo.proximosEstrenos;
    });
  }

  peliculasEnCines!: any[];
  peliculasProximosEstrenos!: any[];
}

