import { Component, Input, numberAttribute } from '@angular/core';
import { CineCreacionDTO, CineDTO } from '../cines';
import { FormularioCinesComponent } from "../formulario-cines/formulario-cines.component";

@Component({
  selector: 'app-editar-cine',
  imports: [FormularioCinesComponent],
  templateUrl: './editar-cine.component.html',
  styleUrl: './editar-cine.component.css'
})
export class EditarCineComponent {
  @Input({transform: numberAttribute})
id!: number;

cine : CineDTO ={ id: 1 , nombre: 'aAcroploli', latitud : 17.13675770178988, longitud:  -97.70673113838559}


guardarCambios(cine: CineCreacionDTO){
  console.log('edita cine', cine);

}


}
