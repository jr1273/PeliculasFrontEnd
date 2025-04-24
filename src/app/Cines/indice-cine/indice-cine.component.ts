import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { SERVICIO_CRUD_TOKEN } from '../../compartidos/provedores/provedores';
import { CinesService } from '../cines.service';
import { IndiceEntidaadComponent } from "../../compartidos/componentes/indice-entidaad/indice-entidaad.component";

@Component({
  selector: 'app-indice-cine',
  imports: [MatButtonModule, IndiceEntidaadComponent],
  templateUrl: './indice-cine.component.html',
  styleUrl: './indice-cine.component.css',
  providers: [{
    provide: SERVICIO_CRUD_TOKEN, useClass: CinesService
}]
})
export class IndiceCineComponent {

}
