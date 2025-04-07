import { Component, EventEmitter, inject,  Input,  OnInit, Output, } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ActorCreacionDTO, ActoresDTO } from '../actores';
import moment from 'moment';
import { fechaNoPuedeSerFutura } from '../../compartidos/funciones/validaciones';
import { InputImgComponent } from "../../compartidos/componentes/input-img/input-img.component";

@Component({
  selector: 'app-formulario-actores',
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatDatepickerModule, InputImgComponent],
  templateUrl: './formulario-actores.component.html',
  styleUrl: './formulario-actores.component.css'
})
export class FormularioActoresComponent implements OnInit {
  ngOnInit(): void {
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
        }
  }
  private FormBuilder= inject(FormBuilder);


  @Input()
  modelo?: ActoresDTO;
  
  @Output()
  posteoFormulario = new EventEmitter<ActorCreacionDTO>();


form= this.FormBuilder.group({
  nombre: ['', {validators: [Validators.required]}],


    FechaNacimiento : new FormControl<Date | null> (null ,{
      validators: [ Validators.required, fechaNoPuedeSerFutura()]
      }),
      foto: new FormControl< File | string| null>(null)

  })
   obtenerErrorCampoNombre(){
    let campo =this.form.controls.nombre;
    if(campo.hasError('required')){
      return 'el campo nombre es requerido'
    }
    return"";
   }

  obtenerErrorCampoFechaNacimiento(){
    let campo = this.form.controls.FechaNacimiento;

    if( campo.hasError('required')){
      return "el campo  fecha es requerido";
    }
   

    if(campo.hasError('futuro'))
      {
      return campo.getError('futuro').mensaje;

    }
  }

  archivoSeleccionado(file: File)
  {
this.form.controls.foto.setValue(file);
  }
  
  guardarCambios(){
    if(!this.form.valid){
      return;
    }
   const actor = this.form.value as ActorCreacionDTO;
   actor.FechaNacimiento = moment(actor.FechaNacimiento).toDate();

   if(typeof actor.Foto === "string"){
    actor.Foto = undefined;
   }
   this.posteoFormulario.emit(actor); 
   
  }



  
}
