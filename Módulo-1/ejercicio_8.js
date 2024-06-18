// Pedimos al usuario que introduzca un texto
var texto = prompt("Por favor, introduce un texto:");

// Función para verificar si un carácter es una vocal
function esVocal(caracter) {
    return ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'].includes(caracter.toLowerCase());
}

// Buscamos la primer vocal
var posicionVocal = -1; 
for (var i = 0; i < texto.length; i++) {
    if (esVocal(texto[i])) {
        posicionVocal = i + 1; 
        break;
    }
};

// Mostrar el resultado al usuario
if (posicionVocal !== -1) {
    alert("La primera vocal en el texto '" + texto + "' se encuentra en la posición número " + posicionVocal);
} else {
    alert("No se encontraron vocales en el texto '" + texto + "'");
};
