// Contador de visitas
if (localStorage.getItem('visitas')) {
    let visitas = parseInt(localStorage.getItem('visitas'));
    visitas += 1; // Incrementar el contador de visitas
    localStorage.setItem('visitas', visitas); // Guardar el nuevo valor en localStorage
} else {
    localStorage.setItem('visitas', 1); // Si es la primera vez que entra, iniciamos el contador en 1
}

// Contador de tiempo en la página
let timeSpent = 0; // Tiempo en segundos
const timer = setInterval(() => {
    timeSpent += 1;
    updateTimeDisplay(); // Llamamos a la función para actualizar la visualización
}, 1000); // Ejecutamos cada segundo

// Crear el contenedor para los dos contadores
const contadoresContainer = document.createElement('div');
contadoresContainer.style.textAlign = 'center'; // Asegura que los contadores se alineen al centro
document.body.appendChild(contadoresContainer);

// Mostrar tiempo en la página (en la pantalla)
const timeDisplay = document.createElement('div');
timeDisplay.classList.add('contador');
contadoresContainer.appendChild(timeDisplay);

// Función para actualizar el contador de tiempo en la pantalla
function updateTimeDisplay() {
    const minutes = Math.floor(timeSpent / 60); // Obtener minutos
    const seconds = timeSpent % 60; // Obtener segundos
    timeDisplay.innerHTML = `Tiempo: ${minutes}m ${seconds}s`;
}

// Contador de visitas (mostrar en la pantalla)
const visitDisplay = document.createElement('div');
visitDisplay.classList.add('contador');
contadoresContainer.appendChild(visitDisplay);

// Mostrar las visitas en la pantalla
function updateVisitDisplay() {
    const visitas = localStorage.getItem('visitas');
    visitDisplay.innerHTML = `Visitas: ${visitas}`;
}

// Llamamos a la función para mostrar las visitas al cargar la página
updateVisitDisplay();

// Detener el contador cuando el usuario abandone la página
window.addEventListener('beforeunload', () => {
    clearInterval(timer);
});

