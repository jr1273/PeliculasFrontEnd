export interface ActoresDTO{
    id : number;
    nombre: string;
    FechaNacimiento: Date;
    foto?: string;
}

export interface ActorCreacionDTO{
    nombre: string;
    FechaNacimiento: Date;
    Foto?: File;
}

export interface actorAutocompleteDTO{
    id: number;
    nombre: string;
    personaje: string;
    foto: string;
}