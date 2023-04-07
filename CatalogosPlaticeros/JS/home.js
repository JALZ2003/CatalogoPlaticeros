
// Hacer una solicitud HTTP para obtener información sobre la dirección IP del usuario
fetch('https://ipapi.co/json/', {
  mode: 'cors'
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Acceder a la información de la dirección IP del usuario desde el objeto de respuesta
    const country = data.country_code.toLowerCase();

    const flagURL = 'https://www.worldometers.info/img/flags/' + country + '-flag.gif';

    const flagimage = document.getElementById('flag-image');

    flagimage.src = flagURL;
  })
  .catch(error => console.error(error));