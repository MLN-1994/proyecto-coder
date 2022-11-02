
 const productos  = [
 {
     id: 0,
     nombre: "tabaco",
     precio: 650,
     description: "puchos ricos",
     
 },
 {
     id: 1,
     nombre: "liyo",
     precio: 125,
     description: "papel para armar",
 },
 {
     id: 2,
     nombre: "fantoche",
     precio: 150,
     description: "alfajor de chocolate",
 },
 {
     id: 3,
     nombre: "coca-cola",
     precio: 350,
     description: "gaseosa",
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
<spam>${producto.description}</spam>
`

containerProducts.append(div)
 })

//BUSCADOR DE PRODUCTOS
 
const formulario = document.getElementById("form")
const button = document.getElementById("btn")
const filtrar = () => {
    const text = formulario.value.toLowerCase()
    for(let producto of productos){
        let nombre = producto.nombre.toLowerCase()
        if(nombre.indexOf(text) !== -1){
            console.log(producto.nombre);
        }else{
            console.log("el producto no existe")
        }
    }
}
button.addEventListener("click", filtrar)

const buscar = document.getElementById("search")







































