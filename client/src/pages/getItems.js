import React, { useEffect, useState } from 'react';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPrice, setNewPrice] = useState('');


  useEffect(() => {
    fetch('http://localhost:1337/api/items/')
      .then(response => response.json())
      .then(data => setItems(data.data));
  }, []);


  const deleteItem = (itemId) => {
    fetch(`http://localhost:1337/api/items/${itemId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(() => {
        setItems(prevItems => prevItems.filter(item => item.id !== itemId));
      })
      .catch(error => {
        console.error('Error al eliminar el elemento:', error);
      });
  };

  const updateItem = (itemId, updatedAttributes) => {
    fetch(`http://localhost:1337/api/items/${itemId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedAttributes),
    })
      .then(response => response.json())
      .then(updatedItem => {
        setItems(prevItems => prevItems.map(item => item.id === itemId ? updatedItem : item));
      })
      .catch(error => {
        console.error('Error al actualizar el elemento:', error);
      });
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setNewPrice(event.target.value);
  };

  return (
    <div>
      <h1><strong>Lista de Items</strong></h1>
      <br/>

      <ul>
        {items.map(item => (
          <li key={item.id}>
            <h2>Id: {item.id}</h2>

            {item.attributes && (
              <div>
                <h2>Nombre: {item.attributes.nombre}</h2>
                <p>Precio: {item.attributes.precio}</p>
              </div>
            )}
            <button onClick={() => deleteItem(item.id)}>Eliminar</button>
            <div>
              <input type="text" placeholder="Nuevo nombre" value={newName} onChange={handleNameChange} />
              <input type="text" placeholder="Nuevo precio" value={newPrice} onChange={handlePriceChange} />
              <button onClick={() => updateItem(item.id, { nombre: newName, precio: newPrice })}>Modificar</button>
            </div>
            <br/>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;


