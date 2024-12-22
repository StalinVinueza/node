// Seleccionar los elementos del DOM
const btnGenerar = document.getElementById('btnGenerar');
const resultado = document.getElementById('resultado');

// Evento para el botón
btnGenerar.addEventListener('click', async () => {
    try {
        // Hacer la solicitud al servidor
        const response = await fetch('http://localhost:3000/numero-aleatorio');
        if (!response.ok) throw new Error('Error al obtener el número');

        const data = await response.json();
        resultado.textContent = `${data.numero}`;
    } catch (error) {
        resultado.textContent = `Error: ${error.message}`;
    }
});
