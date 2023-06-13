  import React, { useEffect, useState } from 'react';

  const ServiceList = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
      fetch('http://localhost:1337/api/recurrentes?populate=*')
        .then(response => response.json())
        .then(data => setServices(data.data));
    }, []);

    // Agrupar los servicios por cliente
    const groupedServices = services.reduce((acc, service) => {
      const cliente = service.attributes.cliente.data.attributes.nombre;
      if (!acc[cliente]) {
        acc[cliente] = [];
      }
      acc[cliente].push(service);
      return acc;
    }, {});

    return (
      <div>
        <h1><strong>Lista de Servicios</strong></h1>
        <br />
        {Object.entries(groupedServices).map(([cliente, servicios]) => (
          <div key={cliente}>
            <h2><strong>Cliente: {cliente}</strong></h2>
            <ul>
              {servicios.map(service => (
                <li key={service.id}>
                  <p>Servicio: {service.attributes.servicio}</p>
                  <p>Descripción: {service.attributes.descripcion}</p>
                  <p>Fecha: {service.attributes.fecha}</p>
                  <p>Monto: {service.attributes.monto}</p>
                  <p>Renovable: {service.attributes.renovable ? 'True' : 'False'}</p>
                  <br />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  export default ServiceList;





