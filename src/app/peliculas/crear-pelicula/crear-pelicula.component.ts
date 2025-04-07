import { Component } from '@angular/core';
import { PeliculaCreacionDTO } from '../peliculas';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/selectorMultipleModelo';
import { actorAutocompleteDTO } from '../../actores/actores';

@Component({
  selector: 'app-crear-pelicula',
  imports: [FormularioPeliculasComponent],
  templateUrl: './crear-pelicula.component.html',
  styleUrl: './crear-pelicula.component.css'
})
export class CrearPeliculaComponent {

  generosSeleccionado: SelectorMultipleDTO []= [] ;


  generosNoSeleccionado: SelectorMultipleDTO []= [
 { llave: 1 ,  valor : 'Drama'},
 { llave: 2 ,  valor : 'Accion'},
 { llave: 3 ,  valor : 'Comedia'}  ] ;



 cineSeleccionado: SelectorMultipleDTO []= [] ;


 cineNoSeleccionado: SelectorMultipleDTO []= [
{ llave: 1 ,  valor : 'Agora Mall'},
{ llave: 2 ,  valor : 'Blue Mall'},
{ llave: 3 ,  valor : 'Acro'}  ] ;


actoresSeleccionados: actorAutocompleteDTO[] = [];

guardarCambios(pelicula: PeliculaCreacionDTO){
  console.log('creando pelicula', pelicula);
}
}
