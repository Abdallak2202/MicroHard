import React, { useEffect, useState } from 'react';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1337/api/items/')
      .then(response => response.json())
      .then(data => setItems(data.data));
  }, []);

  return (
    <div>
      <h1>Lista de Items</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <h2>Id: {item.id}</h2>
            <h2>Nombre: {item.attributes.nombre}</h2>
            <p>Precio: {item.attributes.precio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;

