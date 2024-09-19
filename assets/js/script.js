let listaNombresGastos = [];
let listaValoresGastos = [];

function clickBoton(){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;

    //console.log(nombreGasto);
    //console.log(valorGasto);
    console.log(listaNombresGastos);

    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);
    //alert('Click del usuario');

    console.log(listaNombresGastos);
    console.log(listaValoresGastos);
    actualizarListaGastos();
}

function actualizarListaGastos(){
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;
    listaNombresGastos.forEach((elemento,posicion) =>{
        const valorGasto = Number(listaValoresGastos[posicion]);
        htmlLista += `<li>${elemento} - USD${valorGasto.toFixed(2)}
                <button onclick="eliminarGasto(${posicion});">Eliminar</button>
                </li>`;
        //aca se calcula el total de gastos
        totalGastos += Number(valorGasto.toFixed(2));
    });
    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos;
    limpiar();
}

function limpiar(){
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
}

function eliminarGasto(posicion){
    listaNombresGastos.splice(posicion,1);
    listaValoresGastos.splice(posicion,1);
    actualizarListaGastos();
}