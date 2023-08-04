// GET
const producto = () => fetch("http://localhost:3000/producto").then((respuesta) => respuesta.json()); 

console.log(producto)
// POST


export const clientServices = {
    producto
  };