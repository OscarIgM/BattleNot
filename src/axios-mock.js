import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

const usuario=[
{
nombreUsuario:"SkankHunt42",
password:"12345",
},


];
//DATOS PAGINA
const imagePagina=[
  {imagenId:1,
imagenUrl:"https://admin.esports.gg/wp-content/uploads/2023/10/Le-Sserafim-overwatch-1568x882.jpg"},
{id:2,
imagenUrl:"https://i.pcmag.com/imagery/reviews/07ot50SIiT7vTZTb99wi9L0-1.fit_scale.size_760x427.v1608156957.jpg"},
];

mock.onGet("/api/imagePagina").reply(200, imagePagina);



const productos = [
  {
    id: 1,
    nombre: "World of lol",
    descripcion:
      "litia, cupiditate eum aspe repellendus praesentium nihil nemo quod repellat, similique accusantium enim?",
    imagen: "https://www.latercera.com/resizer/GUH5NGxq-4-M9I-uK9aGGNqAUuE=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/U35WGFI7HBCEZPWJXCOTXK5GFQ.jpg",
    precio: 460000.00,
  },
  {
    id: 2,
    nombre: "Diabolos 4",
    descripcion:
      "windows, macOs",
    imagen:
      "https://image.api.playstation.com/vulcan/ap/rnd/202212/0522/Dzry5RAwU9HsJGXZ3PUSYgCa.jpg",
    precio: 75.50,
  },
  {
    id: 3,
    nombre: "Los Vikingos Perdidos",
    descripcion:
      "Windows MacOS",
    imagen:
      "https://i.ytimg.com/vi/m2m8EkY7JZU/maxresdefault.jpg",
    precio: 75.50,
  },
  {
    id: 4,
    nombre: "Overwacho 3",
    descripcion:
      "",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BMDNkZDVkODEtNjQyYy00NGYwLTljMGQtOTI2MDAwY2ZlOWFmXkEyXkFqcGdeQXVyNjM2MTY3MTY@._V1_FMjpg_UX1000_.jpg",
    precio: 75.50,
  },
  {
    id: 5,
    nombre: "World Of Warcraft: Classic",
    descripcion:
      "",
    imagen:
      "https://bnetcmsus-a.akamaihd.net/cms/blog_thumbnail/z6/Z69HID4AX12Z1565217144858.jpg",
    precio: 75.50,
  },
  {
    id: 6,
    nombre: "Starcraft:2",
    descripcion:
      "",
    imagen:
      "https://bnetcmsus-a.akamaihd.net/cms/blog_header/2g/2G4VZH5TIWJF1602720144046.jpg",
    precio: 75.50,
  },
];
//ENDPOINT PARA PRODUCTOS POR ID
mock.onGet(/\/api\/productos\/\d+/).reply((config) => {
    const productId = parseInt(config.url.split("/").pop(), 10);
    const productoDetalle = productos.find((producto) => producto.id === productId);
    if (productoDetalle) {
      return [200, productoDetalle]; 
    } else {
      return [404, { message: "Producto no encontrado" }]; 
    }
  });
//ENDPOINT BUSQUEDA DE PRODUCTO
mock.onGet(/\/api\/productos\?search=.+/).reply((config) => {
  const searchTerm = config.url.split("=")[1];

  const productosFiltrados = productos.filter((producto) => {
    const nombreProducto = producto.nombre.toLowerCase();
    const searchTermLower = searchTerm.toLowerCase();

    return nombreProducto.includes(searchTermLower);
  });

  if (productosFiltrados.length > 0) {
    return [200, productosFiltrados];
  } else {
    return [404, { message: "No se encontraron productos que coincidan con la búsqueda" }];
  }
});

  
  //ENDPOINT PARA TODOS LOS PRODUCTOS
mock.onGet("/api/productos").reply(200, productos);
export default axios;