// define la función que actualiza las cuentas
async function actualizarCuentas(servicios) {
    let contador = 0;
    for (let servicio of servicios) {
      if (servicio.renovable) {
        // código para cargar los valores de monto y tipo en la entidad "cuenta"
        contador++;
      }
    }
    console.log(`Se actualizaron ${contador} cuentas.`);
    
    // envía un correo electrónico notificando que se ha actualizado una cuenta
    if (contador > 0) {
      await enviarCorreo('perezea1010@gmail.com', `Se han actualizado ${contador} cuentas.`);
    }
  }
  
  // define la función que se ejecutará mensualmente
  function tareaMensual() {
    // código para obtener la lista de servicios
  
    // establece un temporizador que llame a la función "actualizarCuentas" después de 2 minutos
    setTimeout(async function() {
      await actualizarCuentas(servicio);
      alert('La tarea mensual se ha ejecutado correctamente.');
    }, 120000);
  }