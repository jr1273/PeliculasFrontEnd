import { Component, Input, numberAttribute } from '@angular/core';
import { ActorCreacionDTO, ActoresDTO } from '../actores';
import { FormularioActoresComponent } from "../formulario-actores/formulario-actores.component";

@Component({
  selector: 'app-editar-actor',
  imports: [FormularioActoresComponent],
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.css'
})
export class EditarActorComponent {
    @Input({transform: numberAttribute})
  id!: number;
  actor : ActoresDTO = { id :1 , nombre : 'tom  holland ', FechaNacimiento: new Date('1999-01-25'), foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/330px-Tom_Holland_by_Gage_Skidmore.jpg'}


  guardarCambios(actor: ActorCreacionDTO){
    console.log('editando actor', actor);
  }
  

}
