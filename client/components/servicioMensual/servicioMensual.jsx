// define la función que se ejecutará mensualmente
function tareaMensual() {
    // código a ejecutar
    console.log("Tarea mensual realizada.");
  }
  
  // calcula la fecha de la próxima ejecución
  let fechaActual = new Date();
  let fechaProximaEjecucion = new Date(fechaActual.getFullYear(), fechaActual.getMonth()+1, 1);
  let tiempoHastaEjecucion = fechaProximaEjecucion - fechaActual;
  
  // establece un temporizador para la primera ejecución
  setTimeout(function() {
    tareaMensual(); // ejecuta la tarea
    // establece un intervalo para las ejecuciones posteriores
    setInterval(tareaMensual, 2592000000); // 2592000000 milisegundos = 1 mes
  }, tiempoHastaEjecucion);
  