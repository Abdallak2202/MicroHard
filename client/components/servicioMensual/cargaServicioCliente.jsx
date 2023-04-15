function cargarCostosServiciosRenovablesAClientes() {
    // Obtener todos los servicios recurrentes
    const servicios = obtenerServiciosRecurrentes();
    
    // Obtener todos los clientes registrados
    const clientes = obtenerClientesRegistrados();
    
    // Iterar a través de los servicios recurrentes
    for (let i = 0; i < servicios.length; i++) {
      const servicio = servicios[i];
      if (servicio.renovable) {
        // Cargar los costos de este servicio a los clientes correspondientes
        for (let j = 0; j < clientes.length; j++) {
          const cliente = clientes[j];
          if (cliente.id === servicio.clienteId) {
            cargarCostos(servicio.costos, cliente.cuentaCorriente);
            break;
          }
        }
      }
    }
  }
  
  async function obtenerServiciosRecurrentes() {
    try {
      const response = await fetch('http://localhost:1337/api/recurrentes/');
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  
  async function obtenerClientesRegistrados() {
    try {
      const response = await fetch('http://localhost:1337/api/clientes/');
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  
  
  function cargarCostos(costos, cuentaCorriente) {
    // Aquí iría el código para cargar los costos a la cuenta corriente del cliente

    function cargarCostos(costos, cuentaCorriente) {
      // Sumar los costos al saldo actual de la cuenta corriente
      cuentaCorriente += costos;
    
      // Actualizar el saldo en el objeto de la cuenta corriente
      // (asumiendo que el objeto se encuentra en una lista de clientes)
      const cliente = clientes.find(c => c.id === cuentaCorriente.id);
      if (cliente) {
        cliente.cuentaCorriente = cuentaCorriente;
      }
    
      // Imprimir un mensaje con el resultado de la operación
      console.log(`Se cargaron ${costos} pesos a la cuenta corriente. Saldo actual: ${cuentaCorriente}`);
    }
        
  }
  