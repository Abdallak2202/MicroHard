import React, {useState} from 'react'
import Link from 'next/link'
import pedirPresupuesto from '../../components/pedirPresupuesto/pedirPresupuesto';


export default function ClientsCreate(){
    
    const [input, setInput] = useState({
        name:"",
        cuit:"",
        email:"",
        fiscalAddress:"",
        contacPerson:"",
        phoneNumber:"",
        creationDate:""
     })

     function handleChange(e){
      setInput({
          ...input,
          [e.target.name] : e.target.value
      })
    }

    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(input)
      dispatch(postActivity(input))
      alert("Client created!!!")
      setInput({
        name:"",
        cuit:"",
        email:"",
        fiscalAddress:"",
        contacPerson:"",
        phoneNumber:"",
        creationDate:""
     })

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
    <div className='lg:bg-diagonal-section bg-home-bg overflow-hidden bg-no-repeat bg-center bg-home-responsive min-h-screen w-full  mt-20 mb-20'>

      
<div className="mx-10">
    <Link href= '/'><button className="text-white text-5xl">←</button></Link>
</div>
<div className="mx-auto  bg-opacity-75 text-center rounded-lg max-w-screen-xl px-4 py-10 lg:items-center">

<h1 className='text-3xl font-extrabold sm:text-5xl'>Create Clients</h1>
<form className='bg-white p-5 mt-20 rounded-xl mx-auto w-full max-w-[550px] border-slate-600' onSubmit={(e)=>handleSubmit(e)}>
              <div className='mb-3'>
                   <label className='mb-3 block text-base font-medium text-black'>Name:</label>
                   <input 
                   class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  type="text" 
                    value= {input.name}
                    name= "name" 
                    onChange={(e)=> handleChange(e)}
                    />
           
              </div>

              
              <div className='mb-3'>
                     <label className='mb-3 block text-base font-medium text-black'>Cuit:</label>
                   <input 
                   class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="num" 
                     value= {input.cuit}
                     name= "cuit"
                 onChange={(e)=> handleChange(e)}
                    />
                    
                </div>

                <div className='mb-3'>
                     <label className='mb-3 block text-base font-medium text-black'>Email:</label>
                   <input 
                   class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="text" 
                     value= {input.email}
                     name= "email"
                 onChange={(e)=> handleChange(e)}
                    />
                    
                </div>

               <div className='mb-3'>
                     <label className='mb-3 block text-base font-medium text-black'>Fiscal Address:</label>
                   <input 
                   class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="text" 
                     value= {input.fiscalAddress}
                     name= "fiscalAddress"
                 onChange={(e)=> handleChange(e)}
                    />
                    
                </div>
                <div className='mb-3'>
                  <label className='mb-3 block text-base font-medium text-black'>Contact Person:</label>
                   <input 
                   class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="text"    
                     value= {input.contacPerson}
                    name="contactPerson"
                  onChange={(e)=> handleChange(e)}
                  />
                  
               </div>
               <div className='mb-3'>
                  <label className='mb-3 block text-base font-medium text-black'>Phone Number:</label>
                  <input 
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  type="num" 
                  value= {input.phoneNumber}
                  name="phoneNumber"
                 onChange={(e)=> handleChange(e)}
                   />
                    
                </div>

                <div className='mb-3'>
                  <label className='mb-3 block text-base font-medium text-black'>Creation Date:</label>
                  <input 
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  type="date" 
                  value= {input.creationDate}
                  name="creationDate"
                 onChange={(e)=> handleChange(e)}
                   />
                    
                </div>
                <br />
      <div className="text-4xl bg-zinc-600 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
type="submit" >
      <button type="submit">Upload Client</button>
      </div>
    </form>

    </div>
    </div>
  )
}







