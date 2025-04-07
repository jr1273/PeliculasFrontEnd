import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-listadogenerico',
  imports: [],
  templateUrl: './listadogenerico.component.html',
  styleUrl: './listadogenerico.component.css'
})
export class ListadogenericoComponent {
@Input({required: true})
listado: any;
}
