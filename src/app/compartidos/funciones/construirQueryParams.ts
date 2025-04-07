import { HttpParams } from "@angular/common/http";
import { query } from '@angular/animations';

export function construirQueryParams(obj: any) : HttpParams{
    let queryParams = new HttpParams();

    for (let propiedad in obj){
        if (obj.hasOwnProperty(propiedad)){
            queryParams = queryParams.append(propiedad, obj [propiedad])
        }
    }
    return queryParams;
}