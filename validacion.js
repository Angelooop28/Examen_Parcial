const validacionLibro = {
    titulo: /^[a-zA-Z0-9]{5}$/,
    autor: /^[a-zA-Z0-9]{50}$/,
    editorial: /^[a-zA-Z0-9]{30}$/,
    fechaInicial: /^\d{4}-\d{2}-\d{2}$/,
    fechaFinal: /^\d{4}-\d{2}-\d{2}$/
};

function validarLibro(titulo, autor, editorial, fechaInicial, fechaFinal) {
    let valido = true;
    let mensaje = "";
    if (!validacionLibro.titulo.test(titulo)) {
        valido = false;
        mensaje = "El titulo debe ser alfanumerico de 5 caracteres";
    }
    if (!validacionLibro.autor.test(autor)) {
        valido = false;0
        mensaje = "El autor debe ser alfanumerico de 50 caracteres";
    }
    if (!validacionLibro.editorial.test(editorial)) {
        valido = false;
        mensaje = "La editorial debe ser alfanumerico de 30 caracteres";
    }
    if (!validacionLibro.fechaInicial.test(fechaInicial)) {
        valido = false;
        mensaje = "La fecha inicial debe ser tipo date";
    }
    if (!validacionLibro.fechaFinal.test(fechaFinal)) {
        valido = false;
        mensaje = "La fecha final debe ser tipo date";
    }
    if (valido) {
        alert("Libro ingresado correctamente");
    } else {
        alert(mensaje);
    }
}