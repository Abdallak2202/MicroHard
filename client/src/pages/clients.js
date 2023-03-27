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
      console.log(input)
     // dispatch(postActivity(input))
      alert("Cliente Creado!!")
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
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }


    }


  return (

    <div>

<div className='flex w-full  h-full bottom-0 '>
         <div className=' pb-0 '>
            <img src="clientes.jpg" alt="backgroud" className='h-full w-full fixed bg-cover' />
            </div>

    <div className='lg:bg-diagonal-section bg-home-bg overflow-hidden bg-no-repeat bg-center bg-home-responsive  w-full  mt-20 mb-20 absolute'>

      
{/* <div className="mx-10">
    <Link href= '/'><button className="text-white text-5xl">←</button></Link>
</div> */}
<div className="mx-auto  bg-opacity-75 text-center rounded-lg max-w-screen-xl px-4 py-10 lg:items-center pb-40">

<h1 className='text-3xl font-extrabold sm:text-5xl text-white'>Create Clients</h1>
<form className='bg-zinc-800  p-5 mt-10 rounded-xl mx-auto w-full max-w-[550px] border-white border-0 shadow-sm shadow-white ' onSubmit={(e)=>handleSubmit(e)}>
              <div className='mb-3'>
                   <label className='mb-3 block text-base font-medium text-gray-200'>Name:</label>
                   <input 
                   class="w-full rounded-md border border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  type="text" 
                    value= {input.nombre}
                    name= "nombre" 
                    onChange={(e)=> handleChange(e)}
                    />
           
              </div>

              
              <div className='mb-3'>
                     <label className='mb-3 block text-base font-medium  text-gray-200'>Cuit:</label>
                   <input 
                   class="w-full rounded-md border border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="num" 
                     value= {input.CUIT}
                     name= "CUIT"
                 onChange={(e)=> handleChange(e)}
                    />
                    
                </div>

                <div className='mb-3'>
                     <label className='mb-3 block text-base font-medium text-gray-200'>Email:</label>
                   <input 
                   class="w-full rounded-md border  border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="text" 
                     value= {input.email}
                     name= "email"
                 onChange={(e)=> handleChange(e)}
                    />
                    
                </div>

               <div className='mb-3'>
                     <label className='mb-3 block text-base font-medium text-gray-200'>Fiscal Address:</label>
                   <input 
                   class="w-full rounded-md border  border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="text" 
                     value= {input.direccion}
                     name= "direccion"
                 onChange={(e)=> handleChange(e)}
                    />
                    
                </div>
                <div className='mb-3'>
                  <label className='mb-3 block text-base font-medium text-gray-200'>Contact Person:</label>
                   <input 
                   class="w-full rounded-md border  border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="text"    
                     value= {input.contacto}
                    name="contacto"
                  onChange={(e)=> handleChange(e)}
                  />
                  
               </div>
               <div className='mb-3'>
                  <label className='mb-3 block text-base font-medium text-gray-200'>Phone Number:</label>
                  <input 
                  class="w-full rounded-md border  border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  type="num" 
                  value= {input.telefono}
                  name="telefono"
                 onChange={(e)=> handleChange(e)}
                   />
                    
                </div>

                {/* <div className='mb-3'>
                  <label className='mb-3 block text-base font-medium text-gray-200'>Creation Date:</label>
                  <input 
                  class="w-full rounded-md border  border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  type="date" 
                  value= {input.createtAt}
                  name="createAt"
                 onChange={(e)=> handleChange(e)}
                   />
                    
                </div> */}
                <br />
      <div className="text-4xl bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded-full focus:outline-none focus:shadow-outline"
type="submit" >
      <button type="submit">Upload Client</button>
      </div>
    </form>

    </div>
    </div>

    </div>
    </div>

  )
}







