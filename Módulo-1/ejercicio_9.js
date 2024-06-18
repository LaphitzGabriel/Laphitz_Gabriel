// Función para validar si un número entero menor a 10 con la opcion que coloque 0 
let nota
function esNotaValida(nota) {
    return !isNaN(nota) && nota >= 0 && nota < 11;
}

// Se pide que ingrese las 5 notas
let notas = [];
for (let i = 0; i < 5; i++) {
    let nota = parseInt(prompt("Ingrese la nota  " + (i + 1) + ":"));

    while (!esNotaValida(nota)) {

        nota = parseInt(prompt("La nota ingresada no es válida. Por favor, ingrese una nota natural menor que 11:"));
    }
    notas.push(nota); // Envia como ultimo elemento al array notas
}

// Calcular el promedio de las notas
let suma = 0;

for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
}
let promedio = suma / notas.length;

// Determinar la calificación del alumno
let calificacion;

if (promedio < 6) {
    calificacion = "Reprobado";

} else if (promedio >= 6 && promedio <= 8) {
    calificacion = "Aprobado";
    
} else {
    calificacion = "Sobresaliente";
}

// Mostrar la calificación en pantalla
alert("El promedio de las notas es: " + promedio.toFixed(2) + "\nCalificación: " + calificacion);
