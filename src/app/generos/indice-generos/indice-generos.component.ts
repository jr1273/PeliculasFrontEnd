import { Component, inject } from '@angular/core';
import { GenerosService } from '../generos.service';
import { IndiceEntidaadComponent } from "../../compartidos/componentes/indice-entidaad/indice-entidaad.component";
import { SERVICIO_CRUD_TOKEN } from '../../compartidos/provedores/provedores';

@Component({
  selector: 'app-indice-generos',
  imports: [IndiceEntidaadComponent],
  templateUrl: './indice-generos.component.html',
  styleUrl: './indice-generos.component.css',
  providers: [
 {provide: SERVICIO_CRUD_TOKEN, useClass: GenerosService}
  ]
})
export class IndiceGenerosComponent {
 
  

}
