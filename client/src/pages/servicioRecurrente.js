import React, {useState, useEffect} from 'react'
import Link from 'next/link'

export default function ServicioRecurrenteCreate(){
    
    const [input, setInput] = useState({
        data:{
          cliente:"",
          servicio:"",
          descripcion:"",
          fecha:"",
          precio:"",
          iva:"",
          total:"",
          renovable:""
             }
     })

     const [clients, setClients]= useState([]);

     useEffect(() => {
      var { precio, iva, total } = input.data;
      if (!precio) {
        iva="";
        total="";
      }
      if (precio) {
        precio=precio.toString().replace("," , ".");
        iva=(parseFloat(precio)*0.21).toFixed(2);
        let prevTotal = (parseFloat(precio)+parseFloat(iva)).toFixed(2);
        total = parseFloat(prevTotal.toString().replace(",", ".")).toFixed(2);
        
      }
      setInput((input) => ({
        ...input,
        data: {
          ...input.data,
          precio,
          iva,
          total
        },
      }));
    }, [input.data.precio]);

     useEffect(() => {
      async function fetchClients() {
        const response = await fetch('http://localhost:1337/api/clientes');
        const json = await response.json();
        const data= json.data;
        setClients(data);
      }
      fetchClients();
    }, []);

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
            cliente:"",
            servicio:"",
            descripcion:"",
            fecha:"",
            precio:"",
            iva:"",
            total:"",
            renovable:""
               }
       })

     try {
        const response = await fetch('http://localhost:1337/api/recurrentes/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(input)
        });
        if (!response.ok) {
          alert("No se pudo crear el Servicio Recurrente");
          throw new Error('Network response was not ok');
        }
        alert("Servicio Recurrente creado satisfactoriamente");
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
              <img src="clientes.jpg" alt="backgroud" className='h-full w-full bg-cover' /> 
            </div>

            <div className='lg:bg-diagonal-section bg-home-bg overflow-hidden bg-no-repeat bg-center bg-home-responsive  w-full  mt-8 mb-20 absolute'>

            <div className="mx-auto  bg-opacity-75 text-center rounded-lg max-w-screen-xl px-4 py-10 lg:items-center pb-32    ">

              

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
                      <option value="">Selecciona un cliente</option>
                      {clients.map((client) => (
                        <option key={client.id} value={client.id}>
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
                     <label className='mb-3 block text-base font-medium  text-gray-200'>Precio:</label>
                   <input 
                   className="w-full rounded-md border border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                     value= {input.data.precio}
                     name= "precio"
                     onChange={(e)=> handleChange(e)}
                    />
                    
                </div>
                
              <div className='mb-3'>
                     <label className='mb-3 block text-base font-medium  text-gray-200'>IVA:</label>
                   <input 
                   className="w-full rounded-md border border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                     value= {input.data.iva}
                     name= "iva"
                     onChange={(e)=> handleChange(e)}
                     readOnly
                    />
                    
                </div>

                <div className='mb-3'>
                     <label className='mb-3 block text-base font-medium text-gray-200' >Total:</label>
                   <input 
                   className="w-full rounded-md border  border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                     value= {input.data.total}
                     name= "total"
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
                      <option value="">Selecciona una opcion</option>
                      <option value='true'>Si</option>
                      <option value='false'>No</option>

                  </select>
                    
                </div>
              

               
        <div className=' pt-3 pb-3'>   
      <div className="text-3xl bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline "
        type="submit" >
      <button type="submit">Crear Servicio Recurrente</button>
      </div>
      </div> 
    </form>
    <div className='pt-8 '> 
        

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