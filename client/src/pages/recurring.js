
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function ServicioRecurrenteCreate() {
  const [input, setInput] = useState({
    data: {
      cliente: "",
      servicio: "",
      descripcion: "",
      monto: "",
      fecha: "",
      renovable: "",
      tipo: "Recurrente"
    },
  });

  const [clients, setClients] = useState([]);

  // Parses the number and replace the comma

  useEffect(() => {
    var {monto}= input.data;

    if (monto) {
      monto=monto.toString().replace("," , ".");
    }

      setInput((input) => ({
        ...input,
        data: {
          ...input.data,
          monto: monto
        },
      }));
  }, [input.data.monto]);

  useEffect(() => {
    async function fetchData() {
      const clientsResponse = await fetch("http://localhost:1337/api/clientes");

      const clientsJson = await clientsResponse.json();
      const clientsData = clientsJson.data;
      setClients(clientsData);
    }
    fetchData();
  }, []);

  function handleChange(e) {
    setInput({
      ...input,
      data: {
        ...input.data,
        [e.target.name]: e.target.value,
      },
    });
  }


  const handleSubmit = async (event) => {
    event.preventDefault();

      try {

        let body= {
          data: {
            cliente: parseInt(input.data.cliente),
            servicio: input.data.servicio,
            descripcion: input.data.descripcion,
            monto: parseFloat(input.data.monto),
            fecha: input.data.fecha,
            renovable: input.data.renovable,
            tipo: "Recurrente"
          }
        };
        console.log("BODY", body);

        const servicioResponse = await fetch('http://localhost:1337/api/recurrentes/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        });
    

        const cuentaResponse = await fetch("http://localhost:1337/api/cuentas/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body)
        });
    
        if (!servicioResponse.ok || !cuentaResponse.ok) {
          alert("No se pudieron crear los recursos");
          throw new Error("Network response was not ok");
        }

    
        alert("Recursos creados satisfactoriamente");
        console.log(await servicioResponse.json(), await cuentaResponse.json());

        setInput({
          data: {
            cliente: "",
            servicio: "",
            descripcion: "",
            monto: "",
            fecha: "",
            renovable: "",
            tipo: "Recurrente"
          }
        });
        
      } catch (error) {
        console.error(error);
      }
  };

    
  return (
    <div>

<div  className='flex w-full  h-full bottom-0 ' >

            <div className=' pb-0 '>
              <img src="clientes.jpg" alt="backgroud" className='h-full w-full bg-cover' /> 
            </div>

            <div className='lg:bg-diagonal-section bg-home-bg overflow-hidden bg-no-repeat bg-center bg-home-responsive  w-full  mt-1 absolute'>

            <div className="mx-auto  bg-opacity-75 text-center rounded-lg max-w-screen-xl px-4 py-2 lg:items-center pb-28   ">

              

<h1  className='text-xl font-extrabold sm:text-5xl text-white'>Crear Nuevo Servicio</h1>

<form className='bg-zinc-800  p-5 mt-10 rounded-xl mx-auto w-full max-w-[550px] border-white border-0 shadow-sm shadow-white ' onSubmit={(e)=>handleSubmit(e)}>

                <div className='mb-3'>
                     <label className='mb-3 block text-base font-medium  text-gray-200'>Cliente:</label>
                   <select 
                   className="w-full rounded-md border border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="text" 
                    value= {input.data.cliente}
                    name= "cliente"
                    onChange={(e)=> handleChange(e)}
                    >
                      <option value="" className=' text-black  bg-gray-200'>Selecciona un cliente</option>
                      {clients.map((client) => (
                        <option className=' text-black bg-gray-200' key={client.id} value={client.id}>
                        {client.attributes.nombre}
                        </option>
                      ))}
                  </select>  
                </div>

                <div className='mb-3'>
                     <label className='mb-3 block text-base font-medium  text-gray-200'>Servicio:</label>
                   <input 
                   className="w-full rounded-md border border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                     type="text" 
                     value= {input.data.servicio}
                     name= "servicio"
                     onChange={(e)=> handleChange(e)}
                    />
                    
                </div>
              
                <div className='mb-3'>
                     <label className='mb-3 block text-base font-medium  text-gray-200'>Descripcion:</label>
                   <input 
                   className="w-full rounded-md border border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                     type="text" 
                     value= {input.data.descripcion}
                     name= "descripcion"
                     onChange={(e)=> handleChange(e)}
                    />
                    
                </div>

              <div className='mb-3'>
                     <label className='mb-3 block text-base font-medium  text-gray-200'>Fecha:</label>
                   <input 
                   className="w-full rounded-md border border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                     type="date"
                     value= {input.data.fecha}
                     name= "fecha"
                     onChange={(e)=> handleChange(e)}
                    />
                    
                </div>

              <div className='mb-3'>
                     <label className='mb-3 block text-base font-medium  text-gray-200'>Monto:</label>
                   <input 
                   className="w-full rounded-md border border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                     value= {input.data.monto}
                     name= "monto"
                     onChange={(e)=> handleChange(e)}
                    />
                    
                </div>
                
          

               <div className='mb-3'>
                     <label className='mb-3 block text-base font-medium text-gray-200'>Renovable:</label>
                  <select 
                   className="w-full rounded-md border  border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    value= {input.data.renovable}
                    name= "renovable"
                    onChange={(e)=> handleChange(e)}
                    >
                      <option className=' text-black bg-zinc-200' value="">Selecciona una opcion</option>
                      <option value='true' className=' text-black bg-zinc-200'>Si</option>
                      <option value='false' className=' text-black bg-zinc-200' >No</option>

                  </select>
                    
                </div>
              

               
        <div className=' pt-3 pb-3'>   
      <div className="text-3xl bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline "
        type="submit" >
      <button type="submit">Crear Servicio Recurrente</button>
      </div>
      </div> 
    </form>
    <div className='pt-5 '> 
        

      <Link href= '/'>
        <button className="text-gray-50  bg-blue-900 px-10  hover:bg-blue-700 rounded-full">Volver</button>
        
        </Link>
  </div>

    </div>

    </div>

    </div>

    </div>
    
  )
}