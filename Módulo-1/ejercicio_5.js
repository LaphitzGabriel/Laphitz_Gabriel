let dato, resultado; // se declaran dos variables en las que se cargan los datos y otra los resesultados   

val1 = window.prompt("Introduce tu nombre", "..."); // Se pide al usuriao que ingreese un nombre o lo que sea ingresar 
val2 = window.prompt("Introduce tu apellido", "..."); // Se pide al usuario que ingreeses un apellido o lo que desee ingresar 
resultado = `Concatenado tu nombre y apellido es: ${val1} ${val2} ` ; //Funcion que concatena o junta los dos datos y sse almacenan en resultados
document.write(resultado); // se muestra en el documento con document.wrrite la variable resultado que tiene la concatenacion de los dos valorees ingresados por el usuario   

