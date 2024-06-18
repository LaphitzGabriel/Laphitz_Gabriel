
let valores = [true, false, 2, "hola", "mundo", 3, "char"];

// Determinar cuál de los “elementos de texto” es mayor
let textoMayor = "";
for (let i = 0; i < valores.length; i++) {
  if (typeof valores[i] === "string" && valores[i].length > textoMayor.length) {
    textoMayor = valores[i];
    }
  };

  let ordenArrayMenorAMayor = [];
  for (const item of valores) {
      if (typeof item === 'string') {
        ordenArrayMenorAMayor.push(item);
      }
  };
  
console.log("El texto con mayor cantidad de letras es:", textoMayor);

ordenArrayMenorAMayor.sort();
console.log("El Orden de las palabras de menor a mayor es el siguiente :", ordenArrayMenorAMayor); 

// Declaro las variables para operar con los datos del array y no se le asigna ningun valor    
let num1 = null;
let num2 = null;

// recorremos el array con un bucle for y cargamos los numeros que haya en el array en la variable num1 y num2
for (var i = 0; i < valores.length; i++) {
  if (typeof valores[i] === "number") {

    if (num1 === null) {
      num1 = valores[i];

    } else if (num2 === null) {
      num2 = valores[i];
      break;

    }
  }
}

// Hacemos las operaciones de suma, resta, multiplicacion y divisiones   
if (num1 !== null && num2 !== null) {

  let suma = num1 + num2;

  let resta = num1 - num2;

  let multiplicacion = num1 * num2;

  let division = num1 / num2;

  //Mostramos por consola los resultados de las operaciones
  console.log("Suma:", suma);
  console.log("Resta:", resta);
  console.log("Multiplicación:", multiplicacion);
  console.log("División:", division);

} 
