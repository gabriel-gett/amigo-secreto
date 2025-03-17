//asignacion del valor "amigos".
let amigos = [];
//Funcion para agregar amigos.
function agregarAmigo() {
    //capturar el valor del campo de entrada.
    const intputAmigo = document.getElementById('amigo');
    const nombreAmigo = intputAmigo.value.trim();
    //validar la entrada.
    if(nombreAmigo == ""){
        alert("inserte un nombre, por favor.");
        return;
    }
    //validar que no haya nombres repetidos.
    if(amigos.includes(nombreAmigo)) {
        alert(`El nombre ${nombreAmigo} ya esta en la lista.`)
        return;
    }
    //actualizar el array de amigos.
    amigos.push(nombreAmigo);
    //limpiar el campo de entrada.
    intputAmigo.value = "";
    actualizarLista(); //llama a la funcion "actualizarLista".
}