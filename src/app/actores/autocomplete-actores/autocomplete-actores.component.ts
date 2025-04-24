import { Component, inject, Input, OnInit, ViewChild, viewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatTable, MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatAutocompleteModule, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';

import { MatIconModule } from '@angular/material/icon';
import {CdkDragDrop, DragDropModule, moveItemInArray} from '@angular/cdk/drag-drop';
import { actorAutoCompleteDTO } from '../actores';
import { ActoresService } from '../actores.service';

@Component({
  selector: 'app-autocomplete-actores',
  imports: [DragDropModule,MatAutocompleteModule,MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormsModule, MatTableModule, MatIconModule ],
  templateUrl: './autocomplete-actores.component.html',
  styleUrl: './autocomplete-actores.component.css'
})
export class AutocompleteActoresComponent implements OnInit {
  ngOnInit(): void { this.control.valueChanges.subscribe(valor => {
    if (typeof valor === 'string' && valor){
      this.actoresService.obtenerPorNombre(valor).subscribe(actores => {
        this.actores = actores;
      });
    }
  });
  }

 control = new  FormControl();

 actores:  actorAutoCompleteDTO[] =[]

@Input({required: true})
actoresSeleccionados:  actorAutoCompleteDTO[] =[];

actoresService = inject (ActoresService);
columnasAMostra = ['imagen', 'nombre', 'personaje', 'acciones'];

@ViewChild(MatTable) table!: MatTable< actorAutoCompleteDTO>;


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



eliminar(actor:  actorAutoCompleteDTO){
  const indice = this.actoresSeleccionados.findIndex((a:  actorAutoCompleteDTO) => a.id == actor.id);
  this.actoresSeleccionados.splice(indice, 1);
  this.table.renderRows();
}


}
