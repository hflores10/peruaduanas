var ruc;
var nombres;
var apellidos;
var correo;
var direccion;
var codigo;

function respuesta() {
    console.log('Tu solicitud fué procesada');
}
respuesta();

function puedeManejar(edad){
    if (edad>18){
        return true;
    }

    return false;
}