import { Component } from '@angular/core';
import { CineCreacionDTO } from '../cines';
import { Router, RouterLink } from '@angular/router';
import { FormularioCinesComponent } from "../formulario-cines/formulario-cines.component";
import { FormularioGeneroComponent } from '../../generos/formulario-genero/formulario-genero.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-crear-cine',
  imports: [ FormularioCinesComponent],
  templateUrl: './crear-cine.component.html',
  styleUrl: './crear-cine.component.css'
})
export class CrearCineComponent {

  guardarCambios(cine : CineCreacionDTO){
    console.log('creando cine', cine)
  }


}
