document.write('Una agenda');
let option = parseInt(prompt('Escoge una opción: \n 1-Agregar \n 2-Listar \n 3-Salir'));
document.write(option);
let seguir = true;
let data = [];

while(seguir) {
let option = parseInt(prompt('Escoge una opción: \n 1-Agregar \n 2-Listar \n 3-Salir'));
switch(option){
    case 1:
        alert('Escogiste la opción 1');
        let = nombre = prompt('Ingresa tu nombre');
        data.push(nombre);
        console.table(data);
        break;
    case 2:
        alert('Escogiste la opción 2');
        break;
    case 3:
        alert('Escogiste 3 salir');
        break;
    default:
        alert('No recibí una opción válida');
        break;
    }
}