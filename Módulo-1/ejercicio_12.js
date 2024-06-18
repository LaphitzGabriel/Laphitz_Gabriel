// Definir la clase base Vehiculo
class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    obtenerInformacion() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
    }
}

// Crear la clase hija con la extension 
class Automovil extends Vehiculo {
    constructor(marca, modelo, año, color, precio) {
        super(marca, modelo, año);
        this.color = color;
        this.precio = precio;
    }

    // Sobrescribir el método obtenerInformacion para incluir la información específica del automóvil
    obtenerInformacion() {
        return `${super.obtenerInformacion()}, Color: ${this.color}, Precio: ${this.precio}`;
    }
}

let vehiculo = new Vehiculo("Toyota", "Corolla", 2022); //Clase Base
let automovil = new Automovil("Ford", "Mustang", 2023, "Rojo", "$35,000"); //Clase hija con Herencia 

// Mostrar la información en la consola
console.log("Información del Vehículo:");
console.log(vehiculo.obtenerInformacion());
console.log("\nInformación del Automóvil:");
console.log(automovil.obtenerInformacion());
