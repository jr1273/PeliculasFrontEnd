import { Component, OnInit, Input, numberAttribute, inject } from "@angular/core";
import { Router } from "@angular/router";
import { actorAutoCompleteDTO } from "../../actores/actores";
import { CargandoComponent } from "../../compartidos/componentes/cargando/cargando.component";
import { MostrarErroresComponent } from "../../compartidos/componentes/mostrar-errores/mostrar-errores.component";
import { SelectorMultipleDTO } from "../../compartidos/componentes/selector-multiple/selectorMultipleModelo";
import { extraerErrores } from "../../compartidos/funciones/extraerErrores";
import { PeliculaDTO, PeliculaCreacionDTO } from "../peliculas";
import { PeliculasService } from "../peliculas.service";
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";



@Component({
  selector: 'app-editar-pelicula',
  imports: [MostrarErroresComponent, CargandoComponent, FormularioPeliculasComponent],
  templateUrl: './editar-pelicula.component.html',
  styleUrl: './editar-pelicula.component.css'
})
export class EditarPeliculaComponent  implements OnInit{

  ngOnInit(): void {
    this.peliculasService.actualizarGet(this.id).subscribe(modelo => {
      this.pelicula = modelo.pelicula;
      this.actoresSeleccionados = modelo.actores;
      this.cinesNoSeleccionados = modelo.cinesNoSeleccionados.map(cine => {
        return <SelectorMultipleDTO>{llave: cine.id, valor: cine.nombre};
      });

      this.cinesSeleccionados = modelo.cinesSeleccionados.map(cine => {
        return <SelectorMultipleDTO>{llave: cine.id, valor: cine.nombre};
      });

      this.generosNoSeleccionados = modelo.generosNoSeleccionados.map(genero => {
        return <SelectorMultipleDTO>{llave: genero.id, valor: genero.nombre};
      });

      this.generosSeleccionados = modelo.generosSeleccionados.map(genero => {
        return <SelectorMultipleDTO>{llave: genero.id, valor: genero.nombre};
      });
    });
  }

  @Input({ transform: numberAttribute })
  id!: number;

  pelicula!: PeliculaDTO;
  generosSeleccionados!: SelectorMultipleDTO[];
  generosNoSeleccionados!: SelectorMultipleDTO[];
  cinesSeleccionados!: SelectorMultipleDTO[];
  cinesNoSeleccionados!: SelectorMultipleDTO[];
  actoresSeleccionados!: actorAutoCompleteDTO[];

  peliculasService = inject(PeliculasService);
  router = inject(Router);
  errores: string[] = [];

  guardarCambios(pelicula: PeliculaCreacionDTO){
    this.peliculasService.actualizar(this.id, pelicula).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: err => {
        const errores = extraerErrores(err);
        this.errores = errores;
      }
    })
  }

}

