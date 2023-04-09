
const DataPlaticeros = [
    {
        Img: 17,
        Name: "Platycerium superbum",
        Price: 150.000,
        Details: "Canasta de alambre 30 cm, altura 60 cm",
        Available: 15,
        category: "Plants",
    },

    {
        Img: 17,
        Name: "Platycerium Superbum",
        Price: 150.000,
        Details: "Canasta de alambre 30 cm, altura 60 cm",
        Available: 15,
        category: "Plants",
    },

    {
        Img: 33,
        Name: "Platycerium Wallichii",
        Price: 130.000,
        Details: "Matera No. 10",
        Available: 5,
        category: "Plants",
    },

    {
        Img: 32,
        Name: "Platycerium Ridleyi",
        Price: 130.000,
        Details: "Matera No. 10",
        Available: 10,
        category: "Plants",
    },

    {
        Img: 31,
        Name: "Platycerium Madagascariense",
        Price: 130.000,
        Details: "Matera No. 10",
        Available: 5,
        category: "Plants",
    },

    {
        Img: 30,
        Name: "Platycerium Grande",
        Price: 130.000,
        Details: "Matera No. 10",
        Available: 15,
        category: "Plants",
    },

    {
        Img: 17,
        Name: "Platycerium superbum",
        Price: 150.000,
        Details: "Canasta de alambre 30 cm, altura 60 cm",
        Available: 15,
        category: "Arbol",
    },

    {
        Img: 17,
        Name: "Platycerium superbum",
        Price: 150.000,
        Details: "Canasta de alambre 30 cm, altura 60 cm",
        Available: 15,
        category: "Flor",
    },

    {
        Img: 17,
        Name: "Platycerium superbum",
        Price: 150.000,
        Details: "Canasta de alambre 30 cm, altura 60 cm",
        Available: 15,
        category: "Plants",
    },

    {
        Img: 17,
        Name: "Platycerium superbum",
        Price: 150.000,
        Details: "Canasta de alambre 30 cm, altura 60 cm",
        Available: 15,
        category: "Plants",
    },

    {
        Img: 17,
        Name: "Platycerium superbum",
        Price: 150.000,
        Details: "Canasta de alambre 30 cm, altura 60 cm",
        Available: 15,
        category: "Plants",
    },

    {
        Img: 17,
        Name: "Platycerium superbum",
        Price: 150.000,
        Details: "Canasta de alambre 30 cm, altura 60 cm",
        Available: 15,
        category: "Arbol",
    },

    {
        Img: 17,
        Name: "Platycerium superbum",
        Price: 150.000,
        Details: "Canasta de alambre 30 cm, altura 60 cm",
        Available: 15,
        category: "Flor",
    },

    {
        Img: 17,
        Name: "Platycerium superbum",
        Price: 150.000,
        Details: "Canasta de alambre 30 cm, altura 60 cm",
        Available: 15,
        category: "Arbol",
    },
];

// Hacer una solicitud HTTP para obtener información sobre la dirección IP del usuario
fetch('https://ipapi.co/json/', {
    mode: 'cors'
})
    .then(response => response.json())
    .then(data => {
        // Acceder a la información de la dirección IP del usuario desde el objeto de respuesta
        const country = data.country_code.toLowerCase();

        const flagURL = 'https://www.worldometers.info/img/flags/' + country + '-flag.gif';

        const flagimage = document.getElementById('flag-image');

        flagimage.src = flagURL;
    })
    .catch(error => console.error(error));