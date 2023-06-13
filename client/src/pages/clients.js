import React, {useState} from 'react'
import Link from 'next/link'

export default function ClientsCreate(){
    
    const [input, setInput] = useState({
        data:{
          nombre:"",
          CUIT:"",
          email:"",
          direccion:"",
          contacto:"",
          telefono:""
        }
       })

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
      setInput({
        data:{
          nombre:"",
          CUIT:"",
          email:"",
          direccion:"",
          contacto:"",
          telefono:""
          }
       })

     try {
      const response = await fetch('http://localhost:1337/api/clientes/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(input)
      });
      if (!response.ok) {
        alert("No se pudo crear al cliente");
        throw new Error("Network response was not ok");
      }
      alert("Cliente creado satisfactoriamente");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };


  return (

    <div>

<div className='flex w-full  h-full bottom-0 '>
         <div className=' pb-0 '>
            <img src="clientes.jpg" alt="backgroud" className='h-full w-full bg-cover' />
            </div>

    <div className='lg:bg-diagonal-section bg-home-bg overflow-hidden bg-no-repeat bg-center bg-home-responsive  w-full  mt-20 mb-20 absolute'>

      
<div className="mx-auto  bg-opacity-75 text-center rounded-lg max-w-screen-xl px-4 py-10 lg:items-center pb-40">

<h1 className='text-3xl font-extrabold sm:text-5xl text-white'>Ingresa nuevo Cliente</h1>
<form className='bg-zinc-800  p-5 mt-10 rounded-xl mx-auto w-full max-w-[550px] border-white border-0 shadow-sm shadow-white ' onSubmit={(e)=>handleSubmit(e)}>
              <div className='mb-3'>
                   <label className='mb-3 block text-base font-medium text-gray-200'>Nombre:</label>
                   <input 
                   className="w-full rounded-md border border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  type="text" 
                    value= {input.data.nombre}
                    name= "nombre" 
                    onChange={(e)=> handleChange(e)}
                    />
           
              </div>

              
              <div className='mb-3'>
                     <label className='mb-3 block text-base font-medium  text-gray-200'>CUIT:</label>
                   <input 
                   className="w-full rounded-md border border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                     value= {input.data.CUIT}
                     name= "CUIT"
                     onChange={(e)=> handleChange(e)}
                    />
                    
                </div>

                <div className='mb-3'>
                     <label className='mb-3 block text-base font-medium text-gray-200'>Email:</label>
                   <input 
                   className="w-full rounded-md border  border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="text" 
                     value= {input.data.email}
                     name= "email"
                     onChange={(e)=> handleChange(e)}
                    />
                    
                </div>

               <div className='mb-3'>
                     <label className='mb-3 block text-base font-medium text-gray-200'>Dirección Fiscal:</label>
                   <input 
                   className="w-full rounded-md border  border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="text" 
                     value= {input.data.direccion}
                     name= "direccion"
                     onChange={(e)=> handleChange(e)}
                    />
                    
                </div>
                <div className='mb-3'>
                  <label className='mb-3 block text-base font-medium text-gray-200'>Persona de Contacto:</label>
                   <input 
                   className="w-full rounded-md border  border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="text"    
                    value= {input.data.contacto}
                    name="contacto"
                    onChange={(e)=> handleChange(e)}
                  />
                  
               </div>
               <div className='mb-3'>
                  <label className='mb-3 block text-base font-medium text-gray-200'>Teléfono:</label>
                  <input 
                  className="w-full rounded-md border  border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value= {input.data.telefono}
                  name="telefono"
                  onChange={(e)=> handleChange(e)}
                   />
                    
                </div>

                <br />
      <div className="text-4xl bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded-full focus:outline-none focus:shadow-outline"
type="submit" >
      <button type="submit">Crear Cliente</button>
      </div>
    </form>

    <div className='pt-10'> 
        

        <Link href= '/'>
          <button className="text-gray-50  bg-blue-900 px-10 py-1 hover:bg-blue-700 rounded-full">Volver</button>
          
          </Link>
    </div>


    </div>
    </div>

    </div>
    </div>

  )
}