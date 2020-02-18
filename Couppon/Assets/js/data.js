function Validar() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var boton = document.getElementById("boton").name;

    if (nombre === "") {
        alert("Debe ingresar nombre");
        return;
    }

    if (email === "") {
        alert("Debe ingresar Email");
        return;
    }
    var mensaje = "Botón presionado :" + boton + "\nNombre : " + nombre + "\nEmail : " + email;
    alert(mensaje);

    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("boton").name = "";
}