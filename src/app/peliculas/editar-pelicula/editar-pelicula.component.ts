import { Component, Input, numberAttribute } from '@angular/core';
import { PeliculaDTO, PeliculaCreacionDTO } from '../peliculas';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/selectorMultipleModelo';
import { actorAutocompleteDTO } from '../../actores/actores';

@Component({
  selector: 'app-editar-pelicula',
  imports: [FormularioPeliculasComponent],
  templateUrl: './editar-pelicula.component.html',
  styleUrl: './editar-pelicula.component.css'
})
export class EditarPeliculaComponent {
  @Input({transform: numberAttribute})
id!: number;

pelicula: PeliculaDTO = { id : 1  , titulo: 'spider-Man', trailer: 'ABC',fechaLanzamiento : new Date ('2010-07-25') , poster:'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832'}


  generosSeleccionado: SelectorMultipleDTO[]= [
    { llave: 1 ,  valor : 'Drama'},
  ] ;

  generosNoSeleccionado: SelectorMultipleDTO[]= [
 { llave: 2 ,  valor : 'Accion'},
{ llave: 3 ,  valor : 'Comedia'}  ] ;





cineSeleccionado: SelectorMultipleDTO []= [
  { llave: 2 ,  valor : 'Blue Mall'},
] ;


cineNoSeleccionado: SelectorMultipleDTO []= [
{ llave: 1 ,  valor : 'Agora Mall'},
{ llave: 3 ,  valor : 'Acro'}  ] ;

actoresSeleccionados: actorAutocompleteDTO[]=
[{
  id: 1, nombre: 'tom hall', personaje: 'forrers gom' , foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Tom_Holland_at_KCA_2022.jpg/330px-Tom_Holland_at_KCA_2022.jpg'
 },]



guardarCambios(pelicula: PeliculaCreacionDTO){
  console.log('editado Pelicula', pelicula);
}
}

