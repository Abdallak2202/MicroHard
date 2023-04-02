import React, {useState} from 'react'
import Link from 'next/link'

export default function EnlaceSevicioClienteCreate(){
    
    const [input, setInput] = useState({
        data:{
          clinte:"",
          recurrente:"",
          fecha:"",
          deuda:"",
          renovable:""
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
      alert("Enlace servicio-cliente Creado!!!")
      setInput({
        data:{
            clinte:"",
            recurrente:"",
            fecha:"",
            deuda:"",
            renovable:""
               }
       })

     try {
        const response = await fetch('http://localhost:1337/api/serviciocliente/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(input)
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    


  return (
    <div>

<div  className='flex w-full  h-full bottom-0 ' >

<div className=' pb-0 '>
            <img src="clientes.jpg" alt="backgroud" className='h-full w-full fixed bg-cover' />
            </div>

            <div className='lg:bg-diagonal-section bg-home-bg overflow-hidden bg-no-repeat bg-center bg-home-responsive  w-full  mt-20 mb-20 absolute'>

            <div className="mx-auto  bg-opacity-75 text-center rounded-lg max-w-screen-xl px-4 py-10 lg:items-center pb-40">

              

<h1  className='text-3xl font-extrabold sm:text-5xl text-white'>Enlace Cliente-Servicio recurrente</h1>

<form className='bg-zinc-800  p-5 mt-10 rounded-xl mx-auto w-full max-w-[550px] border-white border-0 shadow-sm shadow-white ' onSubmit={(e)=>handleSubmit(e)}>
                
              <div className='mb-3'>
                     <label className='mb-3 block text-base font-medium  text-gray-200'>Cliente:</label>
                   <input 
                   class="w-full rounded-md border border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="text" 
                     value= {input.cliente}
                     name= "cliente"
                 onChange={(e)=> handleChange(e)}
                    />
                    
                </div>

                <div className='mb-3'>
                     <label className='mb-3 block text-base font-medium text-gray-200' >Recurrente:</label>
                   <input 
                   class="w-full rounded-md border  border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="text" 
                     value= {input.recurrente}
                     name= "recurrente"
                 onChange={(e)=> handleChange(e)}
                    />
                    
                </div>

                <div className='mb-3'>
                     <label className='mb-3 block text-base font-medium text-gray-200'>Fecha de creación:</label>
                   <input 
                   class="w-full rounded-md border  border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="date" 
                     value= {input.fecha}
                     name= "fecha"
                 onChange={(e)=> handleChange(e)}
                    />
                    
                </div>

               <div className='mb-3'>
                     <label className='mb-3 block text-base font-medium text-gray-200'>Deuda:</label>
                   <input 
                   class="w-full rounded-md border  border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="num" 
                     value= {input.deuda}
                     name= "deuda"
                 onChange={(e)=> handleChange(e)}
                    />
                    
                </div>

                <div className='mb-3'>
                     <label className='mb-3 block text-base font-medium text-gray-200'>Renovable:</label>
                   <select onChange={(e)=> handleChange(e)}>
                   class="w-full rounded-md border  border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                   <option value='true'>True</option>
                   <option value='false'>False</option>
                   </select>
                    
                </div>
              

               
        <div className=' pt-3 pb-3'>   
      <div className="text-4xl bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline "
        type="submit" >
      <button type="submit">Upload Relación Cliente-Servicio</button>
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