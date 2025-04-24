import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { ActoresService } from '../actores.service';
import { PaginacionDTO } from '../../compartidos/modelos/PaginacionDTO';
import { HttpResponse } from '@angular/common/http';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ListadogenericoComponent } from '../../compartidos/componentes/listadogenerico/listadogenerico.component';
import { SERVICIO_CRUD_TOKEN } from '../../compartidos/provedores/provedores';
import { IndiceEntidaadComponent } from "../../compartidos/componentes/indice-entidaad/indice-entidaad.component";

@Component({
  selector: 'app-indice-actores',
  imports: [ MatButtonModule, MatTableModule, MatPaginatorModule, SweetAlert2Module, IndiceEntidaadComponent],
  templateUrl: './indice-actores.component.html',
  styleUrl: './indice-actores.component.css',
  providers: [
    {provide: SERVICIO_CRUD_TOKEN, useClass : ActoresService}
  ]
})
export class IndiceActoresComponent {

  

}


