import React, { useState } from 'react';
import Link from 'next/link';

export default function BudgetsCreate() {
  const [input, setInput] = useState({
    data:{
      descripcion:"",
      precio:"",
      IVA:"",
      total:""
         }
    
  });

  function handleChange(e) {
    setInput({
      ...input,
      data: {
        ...input.data,
        [e.target.name]: e.target.value
      }
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(input);
    alert('Presupuesto Creado!!!');
    setInput({
      data:{
        descripcion:"",
        precio:"",
        IVA:"",
        total:""
           }
    });



    try {
        const response = await fetch('https://star-link-back-end-production.up.railway.app/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(input)
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
  }


  return (
    <div className="home">
      <div className="derecha">
        <Link href="/home">
          <button className="color">Return</button>
        </Link>
      </div>
      <h1>Create Budget</h1>
      <form onSubmit={handleSubmit}>
        <table>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-center">
                Item
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Descripcion
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                precio
              </th>
              <th scope="col" className="px-6 py-3 text-center">
               IVA
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Cantidad
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Total 
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-8 py-20 text-center">
                <input
                  type="text"
                  value={input.item}
                  name="item"
                  onChange={handleChange}
                />
              </td>
              <td className="px-8 py-20 text-center">
                <input
                  type="text"
                  value={input.descripcion}
                  name="descripcion"
                  onChange={handleChange}
                />
              </td>
              <td className="px-8 py-20 text-center">
                <input
                  type="decimal"
                  value={input.precio}
                  name="precio"
                  onChange={handleChange}
                />
              </td>
              <td className="px-8 py-20 text-center">
                <input
                  type="decimal"
                  value={input.IVA}
                  name="IVA"
                  onChange={handleChange}
                />
              </td>
              <td className="px-8 py-20 text-center">
                <input
                  type="decimal"
                  value={input.cantidad}
                  name="cantidad"
                  onChange={handleChange}
                />
              </td>
              <td className="px-8 py-20 text-center">
                <input
                  type="decimal"
                  value={input.total}
                  name="total"
                  onChange={handleChange}
                />
              </td> 
            </tr>
              </tbody>
              </table>
              <br />
      <div className="text-4xl bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    type="submit" >
      <button type="submit">Upload Presupueto</button>
      </div>


              </form>
              </div>
  )
}