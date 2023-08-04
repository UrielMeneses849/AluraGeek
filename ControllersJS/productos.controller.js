import { clientServices } from "../ServicioFetch/ServicioFetch.js";

const cardProducto = (id, url, nombre, precio ) => {
const cardSW = document.createElement("div");
const contenidoCard = `
    <div class="Card">
    <img src=${url} alt="" class="Imagen">
    <div class="textoCard">
    <h4> ${nombre}</h4>
    <h5>${precio}</h5>
    <a href="../Producto.html?id=${id}"><h6>Ver producto</h6></a>
    </div>
    </div>`
    
    cardSW.innerHTML = contenidoCard;
    cardSW.dataset.id = id;

    return cardSW
}

const product = document.querySelector("[data-product]");

clientServices.producto().then((data) => 
{
    data.forEach(({id, url, nombre, precio }) => {
      const nuevaLinea = cardProducto(id, url, nombre, precio);
      product.appendChild(nuevaLinea);
    });
  })
  .catch((error) => alert("Ocurrió un error"));

