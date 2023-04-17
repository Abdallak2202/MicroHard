import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function AbonoCreate() {

  const [input, setInput] = useState({
    data: {
      cliente: "",
      monto: "",
      fecha: "",
      nota: "",
      tipo: "Abono"
    }
  })

  const [clients, setClients] = useState([]);
  const [cuenta, setCuenta] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const clientsResponse = await fetch('http://localhost:1337/api/clientes');
      const clientsJson = await clientsResponse.json();
      const clientsData = clientsJson.data;
      console.log(clientsData)
      setClients(clientsData);

      const cuentaResponse = await fetch('http://localhost:1337/api/cuentas?populate=cliente');
      const cuentaJson = await cuentaResponse.json();
      setCuenta(cuentaJson.data);
    }
    fetchData();
  }, []);

  function handleChange(e) {
    setInput({
      ...input,
      data: {
        ...input.data,
        [e.target.name]: e.target.value
      }
    });
    console.log(input)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateInput()) {
      return;
    }

    try {
      const response = await fetch("http://localhost:1337/api/abonos/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      if (!response.ok) {
        alert("No se pudo crear el abono");
        throw new Error("Network response was not ok");
      }
      alert("Abono creado satisfactoriamente");
      const abono = await response.json();
      console.log(abono);

      const cuentaCreateResponse = await fetch("http://localhost:1337/api/cuentas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            cliente: input.data.cliente,
            monto: input.data.monto,
            tipo: input.data.tipo,
          },
        }),
      });
      
      if (!cuentaCreateResponse.ok) {
        alert("No se pudo actualizar la cuenta");
        throw new Error("Network response was not ok");
      }

      alert("Abono cargado satisfactoriamente");
      setInput({
        data: {
          cliente: "",
          monto: "",
          fecha: "",
          nota: "",
          tipo: "Abono"
        },
      });

    } catch (error) {
      console.error(error);
    }
  };

  function validateInput() {
    // validate input
    return true;
  }

  return (
    <div>
      <div className='flex w-full h-full bottom-0 '>
        <div className=' pb-0 '>
          <img src="clientes.jpg" alt="backgroud" className='h-full w-full bg-cover' />
        </div>

        <div className='lg:bg-diagonal-section bg-home-bg overflow-hidden bg-no-repeat bg-center bg-home-responsive  w-full  mt-6 mb-20 absolute'>
          <div className="mx-auto  bg-opacity-75 text-center rounded-lg max-w-screen-xl px-4 py-10 lg:items-center pb-32">


              

<h1  className='text-xl font-extrabold sm:text-5xl text-white'>Cargar Nuevo Abono</h1>

<form className='bg-zinc-800  p-5 mt-10 rounded-xl mx-auto w-full max-w-[550px] border-white border-0 shadow-sm shadow-white' onSubmit={(e)=>handleSubmit(e)}>

                <div className='mb-3'>
                     <label className='mb-3 block text-base font-medium  text-gray-200'>Cliente:</label>
                   <select 
                   className="w-full rounded-md border border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="text" 
                    value= {input.data.cliente}
                    name= "cliente"
                    onChange={(e)=> handleChange(e)}
                    >
                      <option value="" className=' text-black bg-zinc-200'>Selecciona un cliente</option>
                      {clients.map((client) => (
                        <option className=' text-black bg-zinc-200' key={client.id} value={client.id}>
                        {client.attributes.nombre}
                        </option>
                      ))}
                  </select>  
                </div>
                
              <div className='mb-3'>
                     <label className='mb-3 block text-base font-medium  text-gray-200'>Monto:</label>
                   <input 
                   className="w-full rounded-md border border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="decimal" 
                     value= {input.data.monto}
                     name= "monto"
                 onChange={(e)=> handleChange(e)}
                    />
                    </div>

                <div className='mb-3'>
                     <label className='mb-3 block text-base font-medium text-gray-200' >Fecha:</label>
                   <input 
                   className="w-full rounded-md border  border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="date value=YYYY-MM-DD" 
                     value= {input.data.fecha}
                     name= "fecha"
                 onChange={(e)=> handleChange(e)}
                    />
                    
                </div>

               <div className='mb-3'>
                     <label className='mb-3 block text-base font-medium text-gray-200'>Nota:</label>
                   <input 
                   className="w-full rounded-md border  border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                     value= {input.data.nota}
                     name= "nota"
                     onChange={(e)=> handleChange(e)}
                    />
                    
                </div>

                
               
        <div className=' pt-3 pb-3'>   
      <div className="text-4xl bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline "
        type="submit" >
      <button type="submit">Cargar Abono</button>
      </div>
      </div> 
    </form>

    <div className='pt-8'> 
        
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