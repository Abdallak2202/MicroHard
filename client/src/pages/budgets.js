import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function BudgetsCreate() {
  const [cantidad, setCantidad] = useState(1)
  const [input, setInput] = useState({
    data:{
      cliente:"",
      item:"",
      descripcion:"",
      precio:"",
      IVA:"",
      total:""
    }   
  });
  const [inputsArray, setInputsArray] = useState([input]);

  const [clients, setClients]= useState([]);

  useEffect(() => {
    async function fetchClients() {
      const response = await fetch('http://localhost:1337/api/clientes');
      const json = await response.json();
      const data= json.data;
      console.log("DATA",data);
      setClients(data);
    }
    fetchClients();
  }, []);

  function handleChange(e, index) {
    const { name, value } = e.target;
    const newInputsArray = [...inputsArray];
    newInputsArray[index] = {
      data: {
        ...inputsArray[index].data,
        [name]: value
      }
    };
    setInputsArray(newInputsArray);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputsArray);
    alert('Presupuesto Creado!!!');
    setInputsArray([{ data: { cliente:"", descripcion:"", precio:"", IVA:"", total:"" } }]);
    
    try {
        const response = await fetch('https://star-link-back-end-production.up.railway.app/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(inputsArray)
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
  }

  function handleAddRow() {
    setInputsArray([...inputsArray, { data: { cliente:"", descripcion:"", precio:"", IVA:"", total:"" } }]);
  }

  return (
                     <div>
    <div className='mb-3'>
                     <label className='mb-3 block text-base font-medium  text-black-200'>Cliente:</label>
                   <select 
                   className="w-full rounded-md border border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[gray] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="text" 
                    value= {input.cliente}
                    name= "cliente"
                    onChange={(e)=> handleChange(e)}
                    >
                      <option value="">Selecciona un cliente</option>
                      {clients.map((client) => (
                        <option key={client.id} value={client.id}>
                        {client.attributes.nombre}
                        </option>
                      ))}
                  </select>  
                </div>
      {inputsArray.map((input, index) => (
        <div key={index}>
          <input
            name="item"
            value={input.data.item}
            onChange={(e) => handleChange(e, index)}
            placeholder="Item"
          />
        
            <select>
            name="cantidad"
            value={input.data.cantidad}
            onChange={(e) => handleChange(e, index)}
            placeholder="Cantidad"
            <option value="">Cantidad</option>
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
            </select>
          


          
          <input
            name="descripcion"
            value={input.data.descripcion}
            onChange={(e) => handleChange(e, index)}
            placeholder="Descripción"
          />
          <input
            name="precio"
            value={input.data.precio}
            onChange={(e) => handleChange(e, index)}
            placeholder="Precio"
          />
          <input
            name="IVA"
            value={input.data.IVA}
            onChange={(e) => handleChange(e, index)}
            placeholder="IVA"
          />
          <input
            name="total"
            value={input.data.total}
            onChange={(e) => handleChange(e, index)}
            placeholder="Total"
          />
        </div>
      ))}
      <button onClick={handleAddRow}>Agregar fila</button>
      <button onClick={handleSubmit}>Guardar</button>
      <Link href="/budgets">
        <button>Cancelar</button>
      </Link>
    </div>
  );
}