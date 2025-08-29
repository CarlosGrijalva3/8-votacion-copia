
const correo = document.getElementById('correohtml');
const contrasena = document.getElementById('contrasenahtml');
const boton = document.querySelector('button');

boton.addEventListener('click', () => {
    // aquí validarías el correo y contraseña
    if(correo.value && contrasena.value) {
        // por ahora solo redirige a votacionUni.html
        window.location.href = "votacionUni.html";
    } else {
        alert("Por favor completa todos los campos");
    }
});

/*mandar usuario votaion */
/*contraseña y correo enviar base*/
/**/ 