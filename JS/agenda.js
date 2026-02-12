let seguir = true;
let datos = [];

while(seguir) {
let option = parseInt(prompt('Escoge una opción: \n 1-Agregar \n 2-Listar \n 3-Salir'));
switch(option){
    case 1:
        alert('Escogiste la opción 1');
        let nombre = prompt('Ingresa tu nombre');
        datos.push(nombre);
        break;
    case 2:
        alert('Escogiste la opción 2');
        document.writeln(datos);
        console.table(datos);
        break;
    case 3:
        alert('Escogiste 3 salir');
        seguir = false;
        break;
    default:
        alert('No recibí una opción válida');
        break;
    }
}