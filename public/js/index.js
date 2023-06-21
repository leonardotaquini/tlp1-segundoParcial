const reservasVista = document.querySelector('#reservas');




const URL_BASE = 'http://localhost:3000/api/reservas';
//Obtener las reservas
const obtenerReservas = async() => {
    const res = await fetch(URL_BASE);
    return await res.json();
}

const mostrarReservas = (reservas)=>{
    reservas.innerHTML = '';
    if(reservas.length === 0){
        reservasVista.innerHTML = `
        <tr>
            <td colspan="5" class="text-center">No hay reservas</td>
        </tr>
        `;
    }
    reservas.map(reserva => {
        reservasVista.innerHTML += `
        <tr>
            <td>${reserva.id}</td>
            <td>${reserva.nombre}</td>
            <td>${reserva.apellido}</td>
            <td>${reserva.fecha_reserva}</td>
            <td>${reserva.codigo_reserva}</td>
        </tr>
        `
    })
}




//Obtener las reservas cuando la pagina se carga
document.addEventListener('DOMContentLoaded', async() => {
    const reservas = await obtenerReservas();
    mostrarReservas(reservas);
   
});