let nombres=[];
let numeroMaximo=0;
let formato=
    `<span class="name-item" role="listitem">
        <div class="name-text">
            nombre-placeholder
        </div>
        <div class="button-remove" onclick="eliminarAmigo(this)">
            <i class="material-icons">do_not_disturb_on</i>
        </div>
    </span>`;

function limpiarCaja(){
    document.getElementById('amigo').value="";
}

function actualizarLista(nombreUsuario) {
    document.getElementById('listaAmigos').innerHTML+=formato.replace('nombre-placeholder',nombreUsuario);
}


function agregarAmigo() {
    let nombreUsuario = document.getElementById('amigo').value.trim();
    let soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    // Verificar si el nombre está vacío
    if (nombreUsuario === "" || !soloLetras.test(nombreUsuario)) {
        alert("El nombre no puede estar vacío ni contener numeros");
        limpiarCaja();
        return;
    }
    
    if(nombres.includes(nombreUsuario)){
        alert("El nombre ya ha sido generado");
        limpiarCaja();
    }

    else{
        nombres.push(nombreUsuario);
        numeroMaximo++;
        limpiarCaja();
        actualizarLista(nombreUsuario);

    }
    
}

function eliminarAmigo(boton) {
    const contenedor = boton.closest('.name-item');
    const nombreParaQuitar = contenedor.querySelector('.name-text').innerText;
    const index = nombres.indexOf(nombreParaQuitar);
    if (index !== -1) {
    nombres.splice(index, 1);
}
    contenedor.remove();
}



function sortearAmigo(){

    if(nombres.length <= 2){
        alert('No hay suficientes amigos dispoibles para hacer el sorteo');
    }
    else{
        let amigoSorteado=Math.floor(Math.random()*numeroMaximo);
        let nombreSorteado = document.getElementById('resultado');
        nombreSorteado.innerHTML = `<li>Tu amigo secreto es: ${nombres[amigoSorteado]}</li>`;
    }
    
}