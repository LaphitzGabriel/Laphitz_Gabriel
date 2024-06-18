let meses 

meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
"Septimbre", "Octubre", "Noviembre", "Diciembre"];

while (true){
    let mes = (prompt("Ingrese el numero de mes que quiera 1-12"));

    if (mes >= 1 && mes <= 12) {
        alert(meses[mes - 1]);
        break;
        
    } else {
        alert("Ese número no pertenece a un mes, por favor ingrese uno valido");
    }
}