const flores = [
    {
        id:1,
        nombre: "tulipan",
        img: "./img/tulipan3.jpg",
        precio: 999,
    },
    {
        id:2,
        nombre:"rosa",
        img: "./img/rosa1.jpg",
        precio: 999,
    },
    {
        id:3,
        nombre:"margarita",
        img:"/img/margaritas2.jpg",
        precio: 500,
    },
    {
        id:4,
        nombre: "girasol",
        img: "/img/girasoles2.jpg",
        precio:876,
    },
    {
        id:5,
        nombre:"dahlias",
        img: '/img/dahlis2.jpg',
        precio:578,
    },
    {
        id:6,
        nombre:"ramo",
        img:"/img/ramo2.jpg",
        precio:845,
    },
]

for (let i = 0; i < flores.length; i++) {
    const element = flores[i];
    document.getElementById("lista-productos").innerHTML += `
    <div class="product-card">
        <img src="img/ramo11.jpg" alt="ramo elegante">
        
        `
    
}
