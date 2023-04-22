import React, { useState, useEffect } from 'react'
import Link from 'next/link'


function validate(input) {
  let errors = {};
  if (!input.fecha) {
      errors.fecha = 'Se requiere una fecha en el formato YYYY-MM-DD';
  } else {
      const regex = /^\d{4}-\d{2}-\d{2}$/;
      if (!regex.test(input.fecha)) {
          errors.fecha = 'El formato de fecha debe ser YYYY-MM-DD';
      }
  }
  return errors;
};


export default function AbonoCreate() {
  const [errors, setErrors] = useState({});
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

  useEffect(() => {
    var {monto}= input.data;

    if (monto) {
      monto=monto.toString().replace("," , ".");
    };

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
      const clientsResponse = await fetch('http://localhost:1337/api/clientes');
      const clientsJson = await clientsResponse.json();
      const clientsData = clientsJson.data;
      console.log(clientsData)
      setClients(clientsData);
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
    setErrors(validate({
      ...input,
      data: {
        ...input.data,
        [e.target.name]: e.target.value
      }
  }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setInput({
      data:{
        cliente: "",
        monto: "",
        fecha: "",
        nota: "",
        tipo: "Abono"
      }
    })
  
    const validationErrors = validate(input.data);
    setErrors(validationErrors);
  
    if (Object.keys(validationErrors).length > 0) {
      return;
    }
  
    try {
      const abonoResponse = fetch("http://localhost:1337/api/abonos/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
    
      const cuentaResponse = fetch("http://localhost:1337/api/cuentas/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
    
      const [abono, cuenta] = await Promise.all([abonoResponse, cuentaResponse]);
    
      if (!abono || !cuenta) {
        alert("No se pudieron crear los recursos");
        throw new Error("Network response was not ok");
      }
    
      alert("Recursos creados satisfactoriamente");
      console.log(await abono.json(), await cuenta.json());
    
    } catch (error) {
      console.error(error);
    }
  };
  


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
                    {errors.fecha && (
                        <p className='text-xl font-extrabold sm:text-1xl text-white'>{errors.fecha}</p>
                    )}
                    
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