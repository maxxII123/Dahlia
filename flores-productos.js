
const flores = [
    {
        id:1,
        nombre: "tulipan",
        imag: "/img/lirio1.jpg",
        precio: 999,
        descripcion:"edkfejfefjafa",
    },
    {
        id:2,
        nombre:"rosa",
        imag: "/img/rosa1.jpg",
        precio: 999,
        descripcion:"edkfejfefjafa",
    },
    {
        id:3,
        nombre:"margarita",
        imag:"/img/margaritas2.jpg",
        precio: 500,
        descripcion:"edkfejfefjafa",
    },
    {
        id:4,
        nombre: "girasol",
        imag: "/img/girasoles2.jpg",
        precio:876,
        descripcion:"edkfejfefjafa",
    },
    {
        id:5,
        nombre:"dahlias",
        imag: '/img/dalias2.jpg',
        precio:578,
        descripcion:"edkfejfefjafa",
    },
    {
        id:6,
        nombre:"ramo",
        imag:"/img/ramo2.jpg",
        precio:845,
        descripcion:"edkfejfefjafa",
    },
    {
        
    }

]

var carrito = [];

var container = document.getElementById("container-card");
for (let i = 0; i < 10; i++) {
    const element = flores[i];
container.innerHTML+=` 
<div class='product-card'>
<img src="`+ element.imag +`">
<h1>`+ element.nombre +`</h1>
<p>` + element.descripcion +` </p>
<p>` + element.precio + `</p>
<button class="buy-button" onclick="agregarAlCarrito(${element.id})">Comprar</button>
</div>`;
    
}   

function agregarAlCarrito(id) {
    const florSeleccionada = flores.find(flor => flor.id === id);
    carrito.push(florSeleccionada);
    mostrarCarrito();
}

function mostrarCarrito() {
    var carritoContainer = document.getElementById("carrito-container");
    carritoContainer.innerHTML = "";

    var total = 0;
    carrito.forEach(flor => {
        total += flor.precio;
        carritoContainer.innerHTML += `<div>${flor.nombre} - ${flor.precio} CPL</div>`;
    });

    carritoContainer.innerHTML += `<div>Total: ${total} CPL</div>`;
}









