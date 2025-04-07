import { Component, Input, ViewChild, viewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatTable, MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatAutocompleteModule, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import { actorAutocompleteDTO } from '../actores';
import { MatIconModule } from '@angular/material/icon';
import {CdkDragDrop, DragDropModule, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-autocomplete-actores',
  imports: [DragDropModule,MatAutocompleteModule,MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormsModule, MatTableModule, MatIconModule ],
  templateUrl: './autocomplete-actores.component.html',
  styleUrl: './autocomplete-actores.component.css'
})
export class AutocompleteActoresComponent {

 control = new  FormControl();

 actores: actorAutocompleteDTO[] =[{
  id: 1, nombre: 'tom hall', personaje: '' , foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Tom_Holland_at_KCA_2022.jpg/330px-Tom_Holland_at_KCA_2022.jpg'
 },
 {
  id: 2, nombre: 'tom jack', personaje: '' , foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Jason_Clarke_Cannes_2012.jpg/360px-Jason_Clarke_Cannes_2012.jpg'
 },
 {
  id: 3, nombre: 'samuel', personaje: '' , foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Samuel_Joaqu%C3%ADn_Flores.JPG/398px-Samuel_Joaqu%C3%ADn_Flores.JPG'
 },

]

@Input({required: true}
  
)
actoresSeleccionados: actorAutocompleteDTO[] =[];
columnasAMostra = ['imagen', 'nombre', 'personaje', 'acciones'];

@ViewChild(MatTable) table!: MatTable<actorAutocompleteDTO>;


actorSeleccionado(event: MatAutocompleteSelectedEvent){
  this.actoresSeleccionados.push(event.option.value);
  this.control.patchValue('');
 if (this.table != undefined){
  this.table.renderRows();
 }
}


finalizarArrastre( event: CdkDragDrop<any[]>){
  const indicePrevio = this.actoresSeleccionados.findIndex(actor => actor === event.item.data);
  moveItemInArray(this.actoresSeleccionados, indicePrevio, event.currentIndex);
  this.table.renderRows();
}



eliminar(actor: actorAutocompleteDTO){
  const indice = this.actoresSeleccionados.findIndex((a: actorAutocompleteDTO) => a.id == actor.id);
  this.actoresSeleccionados.splice(indice, 1);
  this.table.renderRows();
}


}
