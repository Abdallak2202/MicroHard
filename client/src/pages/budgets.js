import React, {useState, useEffect} from 'react'


export default function BudgetsCreate(){
    
    const [input, setInput] = useState({
      data:{
        cliente:"",
        descripcion:"",
        total:""
           }
     });

    const [selectedItems, setSelectedItems]= useState({
       id:"",
       item:"",
       precio:"",
       iva:"",
       cantidad:""
     });

    const [finalItems, setFinalItems]= useState([]);

    const [items, setItems]= useState([]);

    const [clients, setClients]= useState([]);

    useEffect(() => {
      var {precio, iva}= selectedItems;
      var {total}= input.data;

      if (precio) {
        precio=precio.toString().replace("," , ".");
      }

      if (iva) {
        iva=iva.toString().replace("," , ".");
      }

      if (total) {
        total=total.toString().replace("," , ".");
      }

        setSelectedItems({
          ...selectedItems,
          precio: precio,
          iva: iva
        })
  
        setInput((input) => ({
          ...input,
          data: {
            ...input.data,
            total: total
          },
        }));
    }, [selectedItems.precio, selectedItems.iva, input.data.total]);

    useEffect(() => {
      let total=0;

      finalItems.map((item) => {
        let precio= parseFloat(item.precio || 0);
        let iva= parseFloat(item.iva || 0);
        let cantidad= parseInt(item.cantidad || 1);
        let totalItem= (precio+iva)*cantidad;
        total+=totalItem;
      })

      setInput({
        ...input,
        data: {
          ...input.data,
          total: total
        }
      });
    }, [selectedItems, finalItems]);

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
        precio:"",
        iva:"",
        cantidad:""
      })
      const itemInput = document.getElementsByName("item")[0];
if (itemInput) {
  itemInput.value = itemInput.options[0].value;
}

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
          total:""
           }
     })
      setSelectedItems({
        id:"",
        item:"",
        precio:"",
        iva:"",
        cantidad:""
      })
      setFinalItems([]);

      async function handleSaveBudget() {
        const budgetData = {
          cliente: parseInt(input.data.cliente),
          descripcion: input.data.descripcion,
          total: input.data.total,
          items: finalItems
        };

     try {
         let account={
          data:{
            cliente: parseInt(input.data.cliente),
            tipo: "Presupuesto",
            monto: input.data.total
          }
        }
        console.log("ACCOUNT", account);

        const budgetResponse = await fetch('http://localhost:1337/api/presupuestos/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ data: budgetData })
        });

        const accountResponse= await fetch('http://localhost:1337/api/cuentas/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(account)
        });
        console.log(account)

        if (!budgetResponse.ok || !accountResponse.ok) {
          alert("No se pudo crear el Presupuesto");
          throw new Error('Network response was not ok');
        }
        alert("Presupuesto creado satisfactoriamente");
        const budgetData = await budgetResponse.json();
        const accountData= await accountResponse.json();
        console.log(budgetData);
        console.log(accountData);

        setInput({
          data: {
            cliente: "",
            descripcion: "",
            total: ""
          }
        });
        setSelectedItems({
          id: "",
          item: "",
          precio: "",
          iva: "",
          cantidad: ""
        });
        setFinalItems([]);

        
      } catch (error) {
        console.error(error);
      }
    };
  }
    


  return (
    <div>
<div class="antialiased fot-nsans bg-zinc-800">
           
            
           <img src="home.jpg" alt="backgroud" className='h-full w-full fixed bg-cover' /> 
         
             <div class="container mx-auto px-4 sm:px-8 pb-48 absolute ">
         
                 <div class="pt-16">
         
                     <div className='pb-2 text-center'>
         
                     <h2 className='text-xl font-extrabold sm:text-5xl text-white'>Crear Nuevo Presupuesto</h2>
         
                     </div>
             <form>
             
         
                    <div class="my-2 flex sm:flex-row flex-col">
         
                         <div class="flex flex-row mb-1 sm:mb-0">
         
                             <div class="relative">
         
                             <div className='mb-3'>
         
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
         
                     <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
         
                         <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
         
                             <table class="min-w-full leading-normal">
         
                                 <thead>
         
                                     <tr>
                                         <th
                                             class="px-5 py-3 border-b-2 border-gray-200 bg-zinc-700 text-left text-xs font-semibold text-gray-50 uppercase tracking-wider">
                                             Items
                                         </th>
                                         <th
                                             class="px-5 py-3 border-b-2 border-gray-200 bg-zinc-700 text-left text-xs font-semibold text-gray-50 uppercase tracking-wider">
                                             Descripción
                                         </th>
                                         <th
                                             class="px-5 py-3 border-b-2 border-gray-200 bg-zinc-700 text-left text-xs font-semibold text-gray-50 uppercase tracking-wider">
                                             Cantidad
                                         </th>
                                         <th
                                             class="px-5 py-3 border-b-2 border-gray-200 bg-zinc-700 text-left text-xs font-semibold text-gray-50 uppercase tracking-wider">
                                             Precio
                                         </th>
                                         <th
                                             class="px-5 py-3 border-b-2 border-gray-200 bg-zinc-700 text-left text-xs font-semibold text-gray-50 uppercase tracking-wider">
                                             Iva
                                         </th>
                                         <th
                                             class="px-5 py-3 border-b-2 border-gray-200 bg-zinc-700 text-left text-xs font-semibold text-gray-50 uppercase tracking-wider">
                                             Total
                                         </th>
                                     </tr>
                                 </thead>
         
                                 <tbody>

  {finalItems.map((item, index) => (
  <tr key={index}>
  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        
                <label className='mb-3 block text-base font-medium  text-gray-200'></label>
                            <select 
                            className="w-full rounded-md border border-[#7b7777] bg-transparent py-3 px-8 text-base font-medium text-[#444343] outline-none focus:border-[#6A64F1] focus:shadow-md"
                             type="text" 
                             name= "item"
                             onChange={(e)=> handleItemName(e)}
                             >
                               <option  className='' value="">Selecciona un Item</option>
                               {items.map((item) => (
                                 <option key={item.id} value={item.id}>
                                 {item.attributes.nombre}
                                 </option>
                               ))}
                           </select>    
         
         
                         </td>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                           <label className='mb-3 block text-base font-medium  text-gray-200'></label>
                            <input 
                            className="w-full rounded-md border border-[#7b7777] bg-transparent py-3 px-6 text-base font-medium text-[#444343] outline-none focus:border-[#6A64F1] focus:shadow-md"
                             type="text" 
                              value= {input.data.descripcion}
                              name= "descripcion"
                              placeholder='Descripcion'
                          onChange={(e)=> handleChange(e)}
                             />
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
         
                         <label className='mb-3 block text-base font-medium  text-gray-200'></label>
                         <input
                                className="w-full rounded-md border  border-[#7b7777] bg-transparent py-3 px-6 text-base  font-medium text-[#444343] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                value={selectedItems.precio}
                                name='precio'
                                placeholder='Precio'
                                onChange={(e)=> handleItem(e)}
                         />
                         </td>

                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">

                      <label className='mb-3 block text-base font-medium  text-gray-200'></label>
                        <input
                          className="w-full rounded-md border  border-[#7b7777] bg-transparent py-3 px-6 text-base font-medium text-[#444343] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          value={selectedItems.iva}
                          name='iva'
                          placeholder='IVA'
                          onChange={(e)=> handleItem(e)}
                         />
                   </td>

                   <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        
                   <label className='mb-3 block text-base font-medium  text-gray-200'></label>
                        <input 
                        className="w-full rounded-md border border-[#7b7777] bg-transparent py-3 px-6 text-base font-medium text-[#444343] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          value= {input.data.total}
                          name= "total"
                          onChange={(e)=> handleChange(e)}
                    />

                        </td>
                        <td>

                    <button onClick={() => handleRemoveItem(index)}>Eliminar</button>
</td>
         
                                     </tr>
                                 ))}
                                 </tbody>
                             </table>
                             
                             <div
                                 class="px-5 py-3 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
         
                                 <div class="inline-flex mt-2 xs:mt-0 space-x-5">
         
                                 <div className=" bg-blue-900 hover:bg-blue-700 text-white py-2 px-8 rounded-full focus:outline-none focus:shadow-outline "
                                  type="submit" >
                                <button type="submit">Crear Presupuesto</button>
                                </div>
         
                                 <button
                                 type='button'
                                 className="text-gray-50  bg-blue-900  py-2 px-8 hover:bg-blue-700  rounded-full"
                                 onClick={(e)=> addItem(e)}> Agregar Fila </button>
         
                                 </div>
                             </div>
                         </div>
                     </div>
          </form>
                 </div>
             </div>
         </div>
    </div>
    
  )
}


