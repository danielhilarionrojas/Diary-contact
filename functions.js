//Función para guardar productos
const saveProduct = (db, producto) => {
    //Accedo al local storage, por medio del id del producto, le digo que me guarde la información de ese producto en formato JSON
    db.setItem(producto.id, JSON.stringify(producto))
    //Recargar la página y borre campos
    window.location.href = '/' 
}

//Función cargar productos
const loadProducts = (db, parentNode) => {
    //Por medio de la variable claves, accedo a la clave del objeto en al consola por medio de la función Object.keys y se le pasa el local storage
    let claves = Object.keys(db)

    //Bucle para recorrer el local storage y extraer todos los productos por sus claves
    for(clave of claves){
        //Por medio de la variable de bloque producto, accedemos al producto por su clave y se parse a un objeto JSON con JSON.parse
        let producto = JSON.parse(db.getItem(clave))
        crearProducto(parentNode, producto, db)
    }
}

//Función para crear los productos debajo del boton agregar producto
const crearProducto = (parentNode, producto, db) => {

    //Para crear un div debajo del boton agregar producto para mostrar los que ya se han agregado
    let divProducto = document.createElement('div')
    let nombreProducto = document.createElement('h3')
    let cantidadProducto = document.createElement('p')
    let referenciaProducto = document.createElement('p')
    //Crear el icono borrar
    let iconoBorrar = document.createElement('span')

    nombreProducto.innerHTML = producto.nombre
    cantidadProducto.innerHTML = producto.cantidad
    referenciaProducto.innerHTML = producto.referencia
    iconoBorrar.innerHTML = 'delete'

    divProducto.classList.add('productos')
    iconoBorrar.classList.add('material-icons', 'icono')
    
    iconoBorrar.onclick = () => {
        db.removeItem(producto.id)
        window.location.href = '/'
    }

    divProducto.appendChild(nombreProducto)
    divProducto.appendChild(cantidadProducto)
    divProducto.appendChild(referenciaProducto)

    divProducto.appendChild(iconoBorrar)

    parentNode.appendChild(divProducto)
}