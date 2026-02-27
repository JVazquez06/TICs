const productos = [
    {
        id: 1,
        nombre: "Laptop",
        precio: 12000
    },

    {
        id: 2,
        nombre: "Mouse",
        precio: 300
    },

    {
        id: 3,
        nombre: "Teclado",
        precio: 800
    }
];

let miobj= {
    id:1,
    nombre: "Laptop",
    precio: 12000
};

setTimeout(() =>{
    console.log('Voy a recorrer el array');

    productos.forEach((valor, index) =>{
        console.log(index, valor.nombre, valor.precio);
    });

    console.table(productos, ['nombre', 'precio']); // Se utiliza (['nombre_llave']) para solo mostrar ese valor en la tabla

    const lognArray = productos.length;
    console.log(`El tamaño de la array es de: ${lognArray}`);

    let mensajeEstado = document.querySelector('#mensajeEstado');
    console.log(mensajeEstado.textContent);
    let listaProductos = document.querySelector('#listaProductos');
    const productosHTML = productos.map(prod => {
        return `<li>${prod.nombre} - ${prod.precio}</li>`;
    }).join('');

    mensajeEstado.textContent = `Recorrí estos elementos: ${lognArray}`;
    listaProductos.innerHTML = `<ul>${productosHTML}</ul>`;
}, 1000);