//Apuntadores a las clases utilizadas en index.html, definidas como constantes con el mismo nombre o similar al de las clases del index.html


//Constantes apuntadores para los inputs del formulario
const producto = document.querySelector('.nombre')
const cantidad = document.querySelector('.cantidad')
const referencia = document.querySelector('.referencia')

//Constante apuntadora al boton agregar producto del formulario
const btnAgregarProducto = document.querySelector('.btn-agregar-producto')

//Constante apuntadora para acceer al listado de tareas
const listadoProductos = document.querySelector('.listado-productos')

//Acceder almacenamiento local de JavaScript con la constante db
const db = window.localStorage

//Función cuando se haga click en boton agregar producto, se agregue utilizando el apuntador al boton
btnAgregarProducto.onclick = () => { 
    let producto = { 
        //Generear un id para cada producto agregado con números entre 1 y 100
        id: Math.random(1,100),
        nombre: nombre.value,
        cantidad: cantidad.value,
        referencia: referencia.value,
    }

    /*Función guardar contacto, recibe el local storage y el objeto infoProducto, se invoca ya que esta en el archivo funciones*/
    saveProduct(db, producto) 
}

loadProducts(db, listadoProductos)