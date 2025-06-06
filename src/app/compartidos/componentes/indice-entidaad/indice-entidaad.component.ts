import { Component, inject, Input } from '@angular/core';
import { SERVICIO_CRUD_TOKEN } from '../../provedores/provedores';
import { HttpResponse } from '@angular/common/http';
import { PaginacionDTO } from '../../modelos/PaginacionDTO';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { ListadogenericoComponent } from "../listadogenerico/listadogenerico.component";
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { IServicioCRUD } from '../../interfaces/IServiciosCRUD';

@Component({
  selector: 'app-indice-entidaad',
  imports: [ListadogenericoComponent,RouterLink, MatButtonModule,  MatTableModule, MatPaginatorModule,SweetAlert2Module],
  templateUrl: './indice-entidaad.component.html',
  styleUrl: './indice-entidaad.component.css'
})
export class IndiceEntidaadComponent <TDTO , TCreacionDTO> {

  @Input({required : true})
  titulo!: string;

  @Input({required : true})
  rutaCrear!: string;

  @Input({required : true})
  rutaEditar!: string;

  @Input()
  
 columnasAMostrar =['id', 'nombre', 'acciones'];
 servicioCRUD =inject(SERVICIO_CRUD_TOKEN) as IServicioCRUD<TDTO, TCreacionDTO>;

 paginacion: PaginacionDTO ={pagina: 1, recordsPorPagina: 5};
entidades!: TDTO[];
cantidadTotalRegistros!: number;


constructor(){
  this.cargarRegistros();

 }

actualizarPaginacion(datos: PageEvent){
  this.paginacion ={ pagina: datos.pageIndex + 1 , recordsPorPagina: datos.pageSize};
  this.cargarRegistros();
}


cargarRegistros(){
  this.servicioCRUD.obtenerPaginado(this.paginacion).subscribe((respuesta: HttpResponse<TDTO[]>)=>{
    this.entidades = respuesta.body as TDTO[];
    const cabecera = respuesta.headers.get("cantidad-total-registros") as string;
    this.cantidadTotalRegistros= parseInt(cabecera, 10);
  
   })
}


borrar (id: number){
  this.servicioCRUD.borrar(id)
  .subscribe(() => {
    this.paginacion.pagina = 1;
    this.cargarRegistros();
  })
}
primeraLetraEnMayuscula(valor: string){
  if(!valor) return valor;
  return valor.charAt(0).toUpperCase() + valor.slice(1);
}

}
