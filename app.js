
 const productos  = [
 {
     id: 0,
     nombre: "tabaco",
     precio: 650,
     cantidad: "",
     
 },
 {
     id: 1,
     nombre: "liyo",
     precio: 125,
     cantidad: "",
 },
 {
     id: 2,
     nombre: "fantoche",
     precio: 150,
     cantidad: "",
 },
 {
     id: 3,
     nombre: "coca-cola",
     precio: 350,
     cantidad: "",
 },
 

 ]


 const containerProducts = document.getElementById("productos")
 productos.forEach((producto) => {
    const div = document.createElement('div')
div.className = "producto-style"

div.innerHTML  = `
<img src="https://via.placeholder.com/200C/O https://placeholder.com/"/>
<h2>${producto.nombre}</h2>
<h4>$${producto.precio}</h4>
<p>${producto.cantidad}</p>
`
//hola
containerProducts.append(div)
 })

//BUSCADOR DE PRODUCTOS
 
const formulario = document.querySelector(".form")
const button = document.querySelector(".btn")
const filtrar = () => {
    const text = formulario.value.toLocaleLowerCase()
    for(let producto of productos){
        let nombre = producto.nombre.toLocaleLowerCase()
        if(nombre.indexOf(text) !== -1){
            console.log(producto.nombre);
        }
    }
}
button.addEventListener("click", filtrar)

const buscar = document.querySelector("#search")







































