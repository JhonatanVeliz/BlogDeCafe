// Valores deñ boton
let enviar = document.querySelector('#buttom');


// FUNCIONES DE ENVIO

let enviarFormulario = () => {

    const numero = "50670910";

    // OBTENIENDO LOS VALORES

    let correo = document.querySelector('#correo').value;
    let nombre = document.querySelector('#name').value;
    let message = document.querySelector('#mensaje').value;


    const url = `https://api.whatsapp.com/send?phone=${numero}&text=
    *_Blog De Café Inscripciones_*%0A%0A%0A
    *Nombre*%0A
    ${nombre}%0A%0A
    *Correo*%0A
    ${correo}%0A%0A
    *Curso de inscripción (u otro...)*%0A
    ${message}%0A%0A`;

    window.open(url);
}


enviar.addEventListener('click', enviarFormulario)
