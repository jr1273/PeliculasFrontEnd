import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ActorCreacionDTO } from './actores';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  constructor() { }
  private http = inject(HttpClient);
  private urlBase = environment.apiURL + '/actores';
  

  public crear(actor: ActorCreacionDTO){
 const formData = this.construirFormData(actor);
 return this.http.post(this.urlBase, formData)   
  }

  private  construirFormData(actor: ActorCreacionDTO): FormData{
    const formData = new FormData();

    formData.append('nombre' , actor.nombre);

    formData.append('fechaNacimiento', actor.FechaNacimiento.toISOString().split('T')[0]);

    if(actor.Foto){
      formData.append('foto', actor.Foto);
    }
    return formData;
  }
}
