import React, { useState } from 'react';

function Presupuesto() {
  const [input, setInput] = useState({
    cliente: '',
    item: '',
    cantidad: '',
    descripcion: '',
    precio: '',
    iva: '',
    total: ''
  });
  const [filas, setFilas] = useState([]);

  const handleChange = e => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setFilas([...filas, input]);
    setInput({
      cliente: '',
      item: '',
      cantidad: '',
      descripcion: '',
      precio: '',
      iva: '',
      total: ''
    });
  };

  const handleUnload = () => {
    setFilas([]);
  };

  return (
    <div>
      <div className="flex w-full h-full bottom-0 ">
        <div className="pb-0 ">
          <img
            src="presupuesto.jpg"
            alt="backgroud"
            className="h-full w-full absolute bg-cover"
          />
        </div>

        <div className="lg:bg-diagonal-section bg-home-bg overflow-hidden bg-home-responsive w-full mt-24 mb-20 absolute ">
          <div className="bg-opacity-75 text-center rounded-lg max-w-full first-letter: py-10 lg:items-center pb-40">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white pb-10">
              Crear Presupuesto
            </h1>

            <div className="mb-3">
              <label className="mb-3 block text-base font-medium text-gray-200">
                Cliente:
              </label>
              <select
                className="w-full rounded-md border border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                type="text"
                value={input.cliente}
                name="cliente"
                onChange={e => handleChange(e)}
              >
                <option value="">Selecciona un cliente</option>
                {clients.map(client => (
                  <option key={client.id} value={client.id}>
                    {client.attributes.nombre}
                  </option>
                ))}
              </select>
            </div>

            <form onSubmit={handleSubmit}>
                
                <table className=' shadow-md shadow-gray-600 '>
                  <thead className="text-xs text-white uppercase bg-stone-800 border-b border-b-gray-200 ">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-center">
                        Item
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Cantidad
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
                        Total 
                      </th>
                      <th scope="col" className="px-6 py-3 text-center"></th>
                      <th scope="col" className="px-6 py-3 text-center"></th>
                      <th scope="col" className="px-6 py-3 text-center"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-8 py-20 text-center bg-stone-800 border-b border-b-gray-200">
                        <input
                        className="w-full rounded-md border  border-[#fdfafa] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          type="text"
                          value={input.item}
                          name="item"
                          onChange={handleChange}
                        />
                      </td>
        
                      <td className="px-8 py-20 text-center bg-stone-800 border-b border-b-gray-200">
                      <select>
        
                        className="w-full rounded-md border  border-[#fdfafa] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        type="decimal"
                         name="cantidad" 
                        onChange={handleChange}
                        
                        <option value="">Selecciona una cantidad</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="8">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        </select>
                      </td>
        
                      <td className="px-8 py-20 text-center bg-stone-800 border-b border-b-gray-200">
                        <input
                        className="w-full rounded-md border  border-[#fdfafa] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          type="text"
                          value={input.descripcion}
                          name="descripcion"
                          onChange={handleChange}
                        />
                      </td>
                      <td className="px-8 py-20 text-center bg-stone-800 border-b border-b-gray-200">
                        <input
        
                        className="w-full rounded-md border  border-[#fdfafa] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        type="decimal"
                        value={input.precio}
                        name="precio"
                        onChange={handleChange}
                        />
                      </td>
                      <td className="px-8 py-20 text-center bg-stone-800 border-b border-b-gray-200">
                        <input
        
                        className="w-full rounded-md border  border-[#fdfafa] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        type="decimal"
                        value={input.IVA}
                        name="IVA"
                        onChange={handleChange}
                        />
                      </td>
                                     
                      <td className="px-8 py-20 text-center bg-stone-800 border-b border-b-gray-200">
                        <input
        
                         className="w-full rounded-md border  border-[#fdfafa] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                         type="decimal"
                         value={input.total}
                          name="total"
                          onChange={handleChange}
                        />
                      </td>
                      <td className=" bg-stone-800 border-b border-b-gray-200"></td>
                      <td className=" bg-stone-800 border-b border-b-gray-200"></td>
                      <td className=" bg-stone-800 border-b border-b-gray-200"></td>
                    </tr>
                      </tbody>
                      </table>
                <div className='pt-10 px-80'>      
              <div className="text-4xl bg-blue-900  hover:bg-blue-700 text-white font-bold py-2  rounded-full focus:outline-none focus:shadow-outline cursor-pointer"
            type="submit" >
              <button type="submit">Upload Presupuesto</button>
              </div>
              </div>
        
        
                      </form>
                      <div className='pt-10'>
        
                      <Link href= '/'>
              <button className="text-gray-50  bg-blue-900 px-10 py-1 hover:bg-blue-700 rounded-full">Return</button>
              
              </Link>
              </div>
        
              </div>
                    </div>
                      </div>
                      </div>
          )
        }