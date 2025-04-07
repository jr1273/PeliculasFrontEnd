

export function extraerErrores(obj: any): string[]{
    const err = obj.error.errors;
    let mensajedeError: string[] = [];
    for (let llave in err){
        let campo = llave;
        const mensajesConCampos = err[llave].map((mensaje: string) => `${campo}: ${mensaje}`);
        mensajedeError= mensajedeError.concat(mensajesConCampos);
    }
    return mensajedeError;

    
}