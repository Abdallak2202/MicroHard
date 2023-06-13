// Define la función que se ejecutará
function tarea() {
  // Realiza una solicitud HTTP a la API para llamar a la función envioMail
  fetch('http://localhost:3000/api/sendMail')
    .then((response) => {
      if (response.ok) {
        console.log('La solicitud de envío de correo electrónico se realizó correctamente.');
      } else {
        console.error('Ocurrió un error al llamar a la API:', response.statusText);
      }
    })
    .catch((error) => {
      console.error('Ocurrió un error al llamar a la API:', error);
    });
}

// Espera tres minutos después de cargar la página y ejecuta la tarea por primera vez
setTimeout(() => {
  tarea();

  // Repite la ejecución cada cinco minutos después de la primera ejecución
  setInterval(() => {
    tarea();
  }, 5 * 60 * 1000); // 5 minutos en milisegundos
}, 3 * 60 * 1000); // 3 minutos en milisegundos


  