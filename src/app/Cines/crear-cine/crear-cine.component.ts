import { Component } from '@angular/core';
import { CineCreacionDTO } from '../cines';
import { Router, RouterLink } from '@angular/router';
import { FormularioCinesComponent } from "../formulario-cines/formulario-cines.component";
import { FormularioGeneroComponent } from '../../generos/formulario-genero/formulario-genero.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SERVICIO_CRUD_TOKEN } from '../../compartidos/provedores/provedores';
import { CinesService } from '../cines.service';
import { CrearEntidadComponent } from "../../compartidos/componentes/crear-entidad/crear-entidad.component";

@Component({
  selector: 'app-crear-cine',
  imports: [ CrearEntidadComponent],
  templateUrl: './crear-cine.component.html',
  styleUrl: './crear-cine.component.css',
  providers: [
    { provide: SERVICIO_CRUD_TOKEN, useClass: CinesService }
  ]
})
export class CrearCineComponent {

  formularioCines = FormularioCinesComponent;
  }



