import React, {useState, useEffect} from 'react'

export default function EstimateCreate(){
    
    const [input, setInput] = useState({
      data:{
        cliente:"",
        descripcion:"",
        horas:""
           }
     })

    const [selectedItems, setSelectedItems]= useState({
       id:"",
       item:"",
       cantidad:"",
     });

    const [finalItems, setFinalItems]= useState([]);

    const [items, setItems]= useState([]);

    const [clients, setClients]= useState([]);

    useEffect(() => {
      async function fetchClients() {
        const response = await fetch('http://localhost:1337/api/clientes');
        const json = await response.json();
        const data= json.data;
        setClients(data);
      }
      fetchClients();
    }, []);

    useEffect(() => {
      async function fetchItems() {
        const response = await fetch('http://localhost:1337/api/items');
        const json = await response.json();
        const data= json.data;
        setItems(data);
      }
      fetchItems();
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

    function handleItemName(e) {
      var itemId = e.target.value;
      const selectedItem = items.find((item) => item.id == itemId);
      setSelectedItems({
        ...selectedItems,
        id: selectedItem.id,
        item: selectedItem.attributes.nombre,
      })
    }

    function handleItem(e) {
      setSelectedItems({
        ...selectedItems,
        [e.target.name]: e.target.value
      })
    }
    
    function addItem() {
      finalItems.push(selectedItems);
      setSelectedItems({
        id:"",
        item:"",
        cantidad:"",
        //horas:""

      })
      document.getElementsByName("item")[0].value = document.getElementsByName("item")[0].options[0].value;
    };

    function handleRemoveItem(id) {
      const list = finalItems.filter((item) => item.id !== id);
      setFinalItems(list);
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(input)

      setInput({
        data:{
          cliente:"",
          descripcion:"",
          cantidad:"",
          horas:""
           }
     })
      setSelectedItems({
        id:"",
        item:"",
        cantidad:"",
        //horas:""
      })
      setFinalItems([]);


     try {
        let body={
          data:{
            cliente: parseInt(input.data.cliente),
            descripcion: input.data.descripcion,
            horas: input.data.horas,
            items: finalItems
               }
        }
        console.log("BODY", body);
        const response = await fetch('http://localhost:1337/api/proyectos/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        });
        if (!response.ok) {
          alert("No se pudo crear la Estimación");
          throw new Error('Network response was not ok');
        }
        alert("Estimación creada satisfactoriamente");
        const data = await response.json();
        console.log(data);

        setInput({
          data:{
            cliente:"",
            descripcion:"",
            cantidad:"",
            horas:""
             }
       })
        setSelectedItems({
          id:"",
          item:"",
          cantidad:"",
        })
        setFinalItems([]);
        
      } catch (error) {
        console.error(error);
      }
    };

    


  return (

<div class="antialiased fot-nsans bg-zinc-800 overflow-auto">
           
            
  <img src="home.jpg" alt="backgroud" className='h-full w-full   absolute bg-cover' /> 

    <div class="container mx-auto px-4 sm:px-8 relative pb-48 ">

        <div class="pt-16">

            <div className='pb-2 text-center'>

            <h2 className='text-xl font-extrabold sm:text-5xl text-white'>Crear Nueva Estimación</h2>

            </div>
    <form>
    

            <div class="my-2 flex sm:flex-row flex-col">

                <div class="flex flex-row mb-1 sm:mb-0">

                    <div class="relative">

                    <div className='mb-4'>

                     <label className='mb-3 block text-base font-medium  text-gray-200'></label>
                   <select 
                   className="w-full rounded-md border border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="text" 
                    value= {input.data.cliente}
                    name= "cliente"
                    onChange={(e)=> handleChange(e)}
                    >
                      <option className='bg-zinc-300 text-black' value="">Selecciona un cliente</option>
                      {clients.map((client) => (
                        <option className='bg-zinc-300 text-black' key={client.id} value={client.id}>
                        {client.attributes.nombre}
                        </option>
                      ))}
                  </select> 

                </div>
                    </div>               
                </div>    
            </div>
           
            <div>
                     <label className='mb-3 block text-base font-medium  text-white'></label>
                            <input 
                            className="w-full rounded-md border border-[#ffffff] bg-gray-50 bg-opacity-5 py-3 px-6 text-base font-medium text-white outline-none focus:border-[#6A64F1] focus:shadow-md"
                             type="text" 
                              value= {input.data.descripcion}
                              name= "descripcion"
                              placeholder='Descripcion'
                          onChange={(e)=> handleChange(e)}
                             />
                     </div> 
                     
                    <div>
                     <label className='mb-6 block text-base font-medium  text-gray-200'></label>
                   <input 
                   className="w-full rounded-md border border-[#fcfafa] bg-gray-50 bg-opacity-5 py-3 px-6 text-base font-medium text-[#faf8f8] outline-none focus:border-[#6A64F1] focus:shadow-md"
                     value= {input.data.horas}
                     name= "horas"
                     placeholder='Horas Laborales'
                     onChange={(e)=> handleChange(e)}
                    />
                    </div>

                    <div className='pt-4'>

            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-y-auto h-96">

                <div class="inline-block min-w-full shadow rounded-lg overflow-hidden ">

                    <table class="min-w-full leading-normal">

                        <thead>

                            <tr>
                                <th
                                    class=" px-5 py-3 border-b-2 border-gray-200 bg-zinc-700 text-left text-xs font-semibold text-gray-50 uppercase tracking-wider">
                                    Items
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-zinc-700 text-left text-xs font-semibold text-gray-50 uppercase tracking-wider">
                                    Cantidad
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-zinc-700 text-left text-xs font-semibold text-gray-50 uppercase tracking-wider">
                                    
                                </th>

                                <th class="px-5 py-3 border-b-2 border-gray-200 bg-zinc-700 text-left text-xs font-semibold text-gray-50 uppercase tracking-wider">
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
   
                                          
                                    <label className='mb-3 block text-base font-medium  text-gray-200'></label>
                   <select 
                   className="w-full rounded-md border border-[#7b7777] bg-transparent py-3 px-6 text-base font-medium text-[#444343] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="text" 
                    name= "item"
                    onChange={(e)=> handleItemName(e)}
                    >
                      <option value="">Selecciona un Item</option>
                      {items.map((item) => (
                        <option key={item.id} value={item.id}>
                        {item.attributes.nombre}
                        </option>
                      ))}
                  </select>    


                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm pb-2">
                  
                  <input
                  id='amount'
                  className="w-full rounded-md border  border-[#7b7777] bg-transparent py-3 px-6 text-base font-medium text-[#444343] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={selectedItems.cantidad}
                  name='cantidad'
                  placeholder='Cantidad'
                  onChange={(e)=> handleItem(e)}
                  />
                 </td>



                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">

              
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                </td>

              </tr>
                            {finalItems.map((item) => (
                      <tr key={item.id}>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          {item.item}
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          {item.cantidad || 1}
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <button class=" bg-blue-900 hover:bg-blue-700 text-white py-2 px-8 rounded-full focus:outline-none focus:shadow-outline "
                          onClick={() => handleRemoveItem(item.id)}>Eliminar
                        </button>
                        </td>
                      </tr>
                    ))}






                        </tbody>
                    </table>
                    
                    <div
                        class="px-5 py-3 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">

                        <div class="inline-flex mt-2 xs:mt-0 space-x-5">

                        <button
                        type='button'
                        className="text-gray-50  bg-blue-900  py-2 px-8 hover:bg-blue-700  rounded-full"
                        onClick={(e)=> addItem(e)}> Agregar Item </button>

                        <div className="
                                 "
                                  type="submit" >
                                <button  className="text-gray-50  bg-blue-900  py-2 px-8 hover:bg-blue-700  rounded-full" type="submit" onClick={(e) => handleSubmit(e)}>Crear Estimación</button>
                                </div>

                        </div>
                    </div>
                </div>
            </div>
            </div>
 </form>
        </div>
    </div>
</div>

    )
    }