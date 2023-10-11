
const flores = [
    {
        id:1,
        nombre: "tulipan",
        img: "/img/lirio1.jpg",
        precio: 999,
        descripcion:"edkfejfefjafa",
    },
    {
        id:2,
        nombre:"rosa",
        img: "/img/rosa1.jpg",
        precio: 999,
        descripcion:"edkfejfefjafa",
    },
    {
        id:3,
        nombre:"margarita",
        img:"/img/margaritas2.jpg",
        precio: 500,
        descripcion:"edkfejfefjafa",
    },
    {
        id:4,
        nombre: "girasol",
        img: "/img/girasoles2.jpg",
        precio:876,
        descripcion:"edkfejfefjafa",
    },
    {
        id:5,
        nombre:"dahlias",
        img: '/img/dalias2.jpg',
        precio:578,
        descripcion:"edkfejfefjafa",
    },
    {
        id:6,
        nombre:"ramo",
        img:"/img/ramo2.jpg",
        precio:845,
        descripcion:"edkfejfefjafa",
    },
    {
        
    }

]



var container = document.getElementById("container-card");
for (let i = 0; i < 10; i++) {
    const element = flores[i];
container.innerHTML+=`
<div class='product-card'>
<img src='`+element.img+`'>
<h1>`+ element.nombre +`</h1>
<p>` + element.descripcion +` </p>
<p>` + element.precio + `</p>
<button class="buy-button">Comprar</button>
</div>`;
    
}   
