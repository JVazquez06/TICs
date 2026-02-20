let seguir = true;
let datos = [];

while(seguir) {
let option = parseInt(prompt('Escoge una opción: \n 1-Agregar \n 2-Listar \n 3-Salir'));
switch(option){
    case 1:
        alert('Escogiste la opción 1');
        let id = datos.length+1;
        let nombre = prompt('Ingresa tu nombre');
        let apellido = prompt('Ingresa tu apellido');
        let facultad = prompt ('Ingresa la facultad a la que asistes');
        let edad = parseInt(prompt('Ingresa tu edad'));
        let telefono = parseInt(prompt('Ingresa tu teléfono'));
        const student = {id, nombre, apellido, facultad, edad, telefono};
        student.id = id;
        student.nombre = nombre;
        student.apellido = apellido;
        student.facultad = facultad;
        student.edad = edad;
        student.telefono = telefono;
        datos.push(student);
        alert('Contacto creado');
        break;
    case 2:
        let todos = '';

            for(let i = 0; i < datos.length; i++){
                todos += 'ID:' + datos[i].id + '\n';
                todos += 'Nombre: ' + datos[i].nombre + '\n';
                todos += 'Apellido: ' + datos[i].apellido + '\n';
                todos += 'Facultad: ' + datos[i].facultad + '\n';
                todos += 'Telefono: ' + datos[i].telefono + '\n';
                todos += 'Edad: ' + datos[i].edad + '\n\n';
            }

            if(datos.length === 0){
                alert("No hay contactos registrados");
            } else {
                console.log(datos);
                alert(todos);
            }
            break;
    case 3:
        alert('Escogiste 3 salir');
        if (confirm('Desea salir?')){
            seguir = false;
        }   
        break;
    default:
        alert('No recibí una opción válida');
        break;
    }
}