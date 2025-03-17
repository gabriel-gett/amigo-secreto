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
//implementa una funcion para actualizar la lista de amigos.
function actualizarLista() {
    //obtener el elemento de la lista.
    const listaAmigos = document.getElementById('listaAmigos');
    //lismpiar la lista existente.
    listaAmigos.innerHTML = "";
    //iterar sobre el arreglo.
    for(let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        //agrega elementos a la lista.
        listaAmigos.appendChild(li);
    }
}