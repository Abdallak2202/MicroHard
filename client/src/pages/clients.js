import React, { useState } from 'react';
import Link from 'next/link';

export default function ClientsCreate() {
  const [input, setInput] = useState({
    nombre: '',
    CUIT: '',
    email: '',
    direccion: '',
    contacto: '',
    telefono: '',
    presupuestos: '',
    proyectos: ''
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = async () => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:1337/api/clientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(input),
      });
      const data = await response.json();
      console.log(data);
      alert('Client created!!!');
      setInput({
        nombre: '',
        CUIT: '',
        email: '',
        direccion: '',
        contacto: '',
        telefono: '',
        presupuestos: '',
        proyectos: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className='home'>
        <div className='derecha'>
          <Link href='/home'>
            <button className='color'>Return</button>
          </Link>
        </div>
        <h1>Create Clients</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label>Name:</label>
            <input
              type='text'
              value={input.nombre}
              name='nombre'
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            <label>Cuit:</label>
            <input
              type='num'
              value={input.CUIT}
              name='CUIT'
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            <label>email:</label>
            <input
              type='text'
              value={input.email}
              name='email'
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            <label>Fiscal Address:</label>
            <input
              type='text'
              value={input.direccion}
              name='direccion'
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            <label>Contact Person:</label>
            <input
              type='text'
              value={input.contacto}
              name='contacto'
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            <label>Phone Number:</label>
            <input
              type='num'
              value={input.telefono}
              name='telefono'
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            <label>Presupuestos:</label>
            <input
              type='text'
              value={input.presupuestos}
              name='presupuestos'
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            <label>Proyectos:</label>
            <input
              type='text'
              value={input.proyectos}
              name='proyectos'
              onChange={(e) => handleChange(e)}
            />
          </div>

          <br />
          <div
            className='text-4xl bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
          >
            <button type="submit">Upload Budget</button>
      </div>


              </form>
              </div>
              </div>
  )
}  