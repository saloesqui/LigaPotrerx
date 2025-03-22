// Variables para contar el tiempo que el usuario lleva en la página
let startTime = new Date().getTime();
let timer;

// Función para calcular el tiempo que ha pasado
function calculateTime() {
    let currentTime = new Date().getTime();
    let timeSpent = currentTime - startTime;
    
    let seconds = Math.floor(timeSpent / 1000); // en segundos
    let minutes = Math.floor(seconds / 60);    // en minutos
    seconds = seconds % 60;                    // segundos restantes

    // Mostrar el tiempo en el formato minutos:segundos
    document.getElementById('time-spent').innerHTML = minutes + "m " + seconds + "s";
}

// Ejecutamos la función cada segundo
timer = setInterval(calculateTime, 1000);

