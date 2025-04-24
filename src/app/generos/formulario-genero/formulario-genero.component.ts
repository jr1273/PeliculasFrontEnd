import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { primeraLetraMayiscula } from '../../compartidos/funciones/validaciones';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { GeneroCreacionDTO, GeneroDTO } from '../generos';

@Component({
  selector: 'app-formulario-genero',
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './formulario-genero.component.html',
  styleUrl: './formulario-genero.component.css'
})
export class FormularioGeneroComponent  implements OnInit{
  ngOnInit(): void {
   if(this.modelo !== undefined ){
    this.form.patchValue(this.modelo);
   }
  }
  @Input()
  modelo?: GeneroDTO;


@Output()
posteoFormulario = new EventEmitter<GeneroCreacionDTO>();

  private formbuiler = inject(FormBuilder);

form= this.formbuiler.group({
  nombre: ['', {validators: [Validators.required, primeraLetraMayiscula()]}]
})

obtenerErrorCampoNombre(): string{
 let nombre= this.form.controls.nombre;
  if( nombre.hasError('required')){
    return "el campo  nombre es requerido";
  }
  if (nombre.hasError('primeraLetraMayiscula')){
    return nombre.getError('primeraLetraMayiscula').mensaje;
  }
 return "";
}
guardarCambios(){

  if(!this.form.valid){
    return;
  }
   const genero =this.form.value as GeneroCreacionDTO;
   this.posteoFormulario.emit(genero);
}
}
