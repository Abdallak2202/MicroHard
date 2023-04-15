import React, {useState, useEffect} from 'react'
import Link from 'next/link'

export default function ProjectsCreate(){
    
    const [input, setInput] = useState({
      data:{
<<<<<<< .merge_file_a06456
        descripcion:"",
        material:"",
        horas:""
           }
     })

=======
        cliente:"",
        descripcion:"",
        materiales:"",
        horas:"",
        precio:"",
        iva:"",
        total:""
           }
     })

    const [clients, setClients]= useState([]);

    useEffect(() => {
      var { precio, iva, total} = input.data;
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

>>>>>>> .merge_file_a11568
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
<<<<<<< .merge_file_a06456
      alert("Project created!!!")
      setInput({
        data:{
          descripcion:"",
          material:"",
          horas:""
             }
=======
      setInput({
        data:{
          cliente:"",
          descripcion:"",
          materiales:"",
          horas:"",
          precio:"",
          iva:"",
          total:""
           }
>>>>>>> .merge_file_a11568
     })

     try {
        const response = await fetch('http://localhost:1337/api/proyectos/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(input)
        });
        if (!response.ok) {
          alert("No se pudo crear el proyecto");
          throw new Error('Network response was not ok');
        }
        alert("Proyecto creado satisfactoriamente");
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

            <div className='lg:bg-diagonal-section bg-home-bg overflow-hidden bg-no-repeat bg-center bg-home-responsive  w-full  mt-6 mb-20 absolute'>

            <div className="mx-auto  bg-opacity-75 text-center rounded-lg max-w-screen-xl px-4 py-10 lg:items-center pb-32">

              

<h1  className='text-xl font-extrabold sm:text-5xl text-white'>Crear Nuevo Proyecto</h1>

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
                      <option value="">Selecciona un cliente</option>
                      {clients.map((client) => (
                        <option key={client.id} value={client.id}>
                        {client.attributes.nombre}
                        </option>
                      ))}
                  </select>  
                </div>
                
              <div className='mb-3'>
<<<<<<< .merge_file_a06456
                     <label className='mb-3 block text-base font-medium  text-gray-200'>Descripcion:</label>
=======
                     <label className='mb-3 block text-base font-medium  text-gray-200'>Descripción:</label>
>>>>>>> .merge_file_a11568
                   <input 
                   className="w-full rounded-md border border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="text" 
<<<<<<< .merge_file_a06456
                     value= {input.descripcion}
=======
                     value= {input.data.descripcion}
>>>>>>> .merge_file_a11568
                     name= "descripcion"
                 onChange={(e)=> handleChange(e)}
                    />
                    
                </div>

                <div className='mb-3'>
                     <label className='mb-3 block text-base font-medium text-gray-200' >Materiales Utilizados:</label>
                   <input 
                   className="w-full rounded-md border  border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="text" 
<<<<<<< .merge_file_a06456
                     value= {input.materiales}
=======
                     value= {input.data.materiales}
>>>>>>> .merge_file_a11568
                     name= "materiales"
                 onChange={(e)=> handleChange(e)}
                    />
                    
                </div>

               <div className='mb-3'>
<<<<<<< .merge_file_a06456
                     <label className='mb-3 block text-base font-medium text-gray-200'>Horas de laboradas:</label>
                   <input 
                   class="w-full rounded-md border  border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="num" 
                     value= {input.horas}
                     name= "horas"
                 onChange={(e)=> handleChange(e)}
=======
                     <label className='mb-3 block text-base font-medium text-gray-200'>Horas laboradas:</label>
                   <input 
                   className="w-full rounded-md border  border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                     value= {input.data.horas}
                     name= "horas"
                     onChange={(e)=> handleChange(e)}
>>>>>>> .merge_file_a11568
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
                     readOnly
                     onChange={(e)=> handleChange(e)}
                    />
                    
                </div>

                <div className='mb-3'>
                     <label className='mb-3 block text-base font-medium  text-gray-200'>Total:</label>
                   <input 
                   className="w-full rounded-md border border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                     value= {input.data.total}
                     name= "total"
                     onChange={(e)=> handleChange(e)}
                    />
                    
                </div>

               
        <div className=' pt-3 pb-3'>   
      <div className="text-4xl bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline "
        type="submit" >
<<<<<<< .merge_file_a06456
      <button type="submit">Upload Proyecto</button>
=======
      <button type="submit">Crear Proyecto</button>
>>>>>>> .merge_file_a11568
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
<<<<<<< .merge_file_a06456
    
  )
}
=======
    
  )
}
>>>>>>> .merge_file_a11568
