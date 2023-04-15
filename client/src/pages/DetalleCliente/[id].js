import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Tabs from '/components/clientes/detalleCliente';
import Link from 'next/link';


export const MyPage = () => {
    const [data, setData] = useState({ clientes: [], presupuestos: [], proyectos: [], recurrentes: [], usuarios: [] });
    const [cliente, setCliente] = useState(null);
    const router = useRouter();
  
    const handleTabChange = () => {
      const id = router.query.id;
      const clienteData = data.clientes && data.clientes.find((cliente) => cliente.id === parseInt(id));
      setCliente(clienteData);
    };
//Select para proyectos
    const [productoSeleccionado, setProductoSeleccionado] = useState("");

    const productosFiltrados = data.proyectos.filter(
      (proyecto) => proyecto.attributes.descripcion === productoSeleccionado
    );
    //Select para presupuestos
    const [presupuestoSeleccionado, setPresupuestoSeleccionado] = useState("");

    const presupuestoFiltrados = data.presupuestos.filter(
      (presupuesto) => presupuesto.attributes.descripcion === presupuestoSeleccionado
    );
  
    useEffect(() => {
      const fetchClienteData = async () => {
        const [clientesResponse, presupuestosResponse, proyectosResponse, recurrentesResponse, usersResponse] = await Promise.all([
          fetch('http://localhost:1337/api/clientes').then((response) => response.json()),
          fetch('http://localhost:1337/api/presupuestos').then((response) => response.json()),
          fetch('http://localhost:1337/api/proyectos').then((response) => response.json()),
          fetch('http://localhost:1337/api/recurrentes').then((response) => response.json()),
          fetch('http://localhost:1337/api/users').then((response) => response.json()),
        ]);
  
        setData({
          clientes: clientesResponse.data,
          presupuestos: presupuestosResponse.data,
          proyectos: proyectosResponse.data,
          recurrentes: recurrentesResponse.data,
          usuarios: usersResponse.data,
        });
  
        handleTabChange();
      };
  
      if (router.query.id) {
        fetchClienteData();
      }
    }, [router.query.id])


   
    const presupuestos = cliente && cliente.data && cliente.data.presupuestos;


   
        const [numeroFactura, setNumeroFactura] = useState(1); // initialize invoice number to 1
      
        // increment the invoice number when the user clicks the "Generar" button
        const handleGenerarFactura = () => {
          setNumeroFactura(numeroFactura + 1);
        };
   

  const tabs = [
    {
      title: (
        <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-400 dark:text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 fill-white">
            <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
          </svg>
          <span className='text-gray-100'>Datos del cliente</span>
        </a>
      ),
      content: (
        <div>
          <div>
          {cliente && (
          <div class=" bg-gradient-to-r from-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-col items-center pb-10 py-6">
              <svg class="w-32 h-32 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
              {/* {data.clientes && data.clientes.map((cliente) => ( */}
                <tr key={cliente.attributes.id}>
                  <td  >
                    <h5 class="mb-1 py-6 text-4xl text-center drop-shadow-lg uppercase font-serif hover:font-sans font-medium text-gray-900 dark:text-white">{cliente.attributes.nombre}</h5>
                    <span class="text-4xl text-center font-mono uppercase text-gray-800 dark:text-gray-600">{cliente.attributes.contacto}</span>
                  </td>
                  <td className='flex space-x-3 py-6'>
                    <a href="#" class="inline-flex items-center px-7 py-2 text-xl font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-graye-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">{cliente.attributes.direccion}</a>
                    <a href="#" class=" inline-flex items-center px-4 py-2 text-xl font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-graye-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">{cliente.attributes.email}</a>
                    <a href="#"  class="inline-flex items-center px-4 py-2 text-xl font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-graye-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">{cliente.attributes.telefono}</a>
              <a href="#"  class="inline-flex items-center px-4 py-2 text-xl font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-graye-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">{cliente.attributes.CUIT}</a>
              </td>
            
              </tr>
              
             
              
          </div>
          </div>
  )} 
          </div>
        </div>
      ),
    },
    {
      title: 	<Link rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-400 dark:text-gray-400">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-4 h-4 fill-white">
<path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z"/></svg>     
 <span className='text-gray-100' >Presupuesto</span>
    </Link>
  ,
      content: <div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-xl text-left text-gray-100 dark:text-gray-100">
              <thead class="text-xs text-white uppercase bg-gray-600 border-b border-blue-400 dark:text-white">
                 
                  <tr>
                      <th scope="col" class="px-6 py-3">
                          Id del Proyecto
                      </th>
                      <th scope="col" class="px-6 py-3">
                      Descripcion
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Precio
                      </th>
                      <th scope="col" class="px-6 py-3">
                          IVA
                      </th>
                      <th scope="col" class="px-6 py-3">
                         Total
                      </th>
                  </tr>
              </thead>
              <tbody>
              {presupuestos && presupuestos.map((presupuesto) => (
 
                  <tr key={presupuesto.id} class="bg-gray-600 border-b border-blue-400 hover:bg-gray-500">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-50 whitespace-nowrap dark:text-gray-100">
                          {presupuesto.id}
                      </th>
                      <td class="px-6 py-4">
                      {presupuesto.attributes.descripcion}
                      </td>
                      <td class="px-6 py-4">
                      {presupuesto.attributes.precio}
                      </td>
                      <td class="px-6 py-4">
                      {presupuesto.attributes.iva}
                      </td>
                      <td class="px-6 py-4">
                          <a href="#" class="font-medium text-white hover:underline">{presupuesto.attributes.total}</a>
                      </td>
                  </tr>
                
))}
              </tbody>
          </table>
          
      </div>
      </div>
      ,
    },

    {
      title: 	<a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-400 dark:text-gray-400">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 fill-white">
        <circle cx="12" cy="12" r="10"></circle>
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
      </svg>
      <span className='text-gray-100'>Proyectos</span>
    </a>
  ,
      content: <div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-xl text-left text-gray-100 dark:text-gray-100">
              <thead class="text-xs text-white uppercase bg-gray-600 border-b border-amber-400 dark:text-white">
                  <tr>
                      <th scope="col" class="px-6 py-3">
                          Id del Proyecto
                      </th>
                      <th scope="col" class="px-6 py-3">
                      Descripcion
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Horas de trabajo
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Materiales
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Precio
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Iva
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Total
                      </th>



                  </tr>
              </thead>
              <tbody>
              {data.proyectos.map((proyecto) => (

                  <tr class="bg-gray-600 border-b border-amber-400 hover:bg-gray-500">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-50 whitespace-nowrap dark:text-gray-100">
                      {proyecto.id}
                      </th>
                      <td class="px-6 py-4">
                      {proyecto.attributes.descripcion}
                      </td>
                      <td class="px-6 py-4">
                      {proyecto.attributes.horas}
                      </td>
                      <td class="px-6 py-4">
                      {proyecto.attributes.materiales}
                      </td>
                      <td class="px-6 py-4">
                      {proyecto.attributes.precio}
                      </td>
                      <td class="px-6 py-4">
                      {proyecto.attributes.iva}
                      </td>
                      <td class="px-6 py-4">
                      {proyecto.attributes.total}
                      </td>



                  </tr>
                  ))}
              </tbody>
          </table>
      </div>
      </div>,
    },
    {
      title: 	<a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-400 dark:text-gray-400">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-white">
  <path fill="none" d="M0 0h24v24H0z"/><path d="M5.373 4.51A9.962 9.962 0 0 1 12 2c5.523 0 10 4.477 10 10a9.954 9.954 0 0 1-1.793 5.715L17.5 12H20A8 8 0 0 0 6.274 6.413l-.9-1.902zm13.254 14.98A9.962 9.962 0 0 1 12 22C6.477 22 2 17.523 2 12c0-2.125.663-4.095 1.793-5.715L6.5 12H4a8 8 0 0 0 13.726 5.587l.9 1.902zM8.5 14H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V7h2v1h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v1h-2v-1H8.5v-2z"/>
</svg>     
 <span className='text-gray-100'>Estado de Deuda</span>
    </a>
,
      content:
      
    
       <div className='bg-gradient-to-r from-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700' >     
       <div className='flex flex-col items-center pb-10 py-6'>
       <table class=" w-full text-xl text-left text-gray-500 dark:text-gray-400  ">
      <thead class=" text-xs text-gray-700 uppercase bg-blue-100 dark:bg-gray-700 dark:text-gray-400">
          <tr className=''> 
              <th scope="col" class="px-6 py-3">
                  Periodo
              </th>
              <th scope="col" class="px-6 py-3">
                  Descripcion
              </th>
              <th scope="col" class="px-6 py-3">Ñ
                  Total de la deuda
              </th>

              <th scope="col" class="px-6 py-3">
                  Abonado hasta el momento
              </th>
              <th scope="col" class="px-6 py-3">
                  Debe hasta el momento
              </th>
              <th scope="col" class="px-6 py-3">
                  Estado de Deuda
              </th>
          </tr>
      </thead>
      <tbody>
    
          <tr class=" bg-gradient-to-r from-gray-00 from-10% via-sky-100 via-30% to-gray-100 to-90% border-blue-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                              <div class="pl-3">
                      <div class="text-base font-semibold">29/01/2023</div>
                      <div class="text-base font-semibold px-8">A</div>
                      <div class="text-base font-semibold">18/03/2023</div>
                  </div>  
              </th>
             
              <td class="px-6 py-4">
           Detalle de lo abonado o no hasta el momento
              </td>
              <td class="px-6 py-4 ">
              <a href="/DetalleCliente/DetalleCliente" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" class="font-medium text-blue-600 dark:text-Red-500 hover:underline">$98.320</a>
              </td>
              <td class="px-6 py-4">
                  <a href="/DetalleCliente/DetalleCliente" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" class="font-medium text-green-600 dark:text-Red-500 hover:underline">$50.360</a>
              </td>
              <td class="px-6 py-4">
                  <a href="/DetalleCliente/DetalleCliente" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" class="font-medium text-red-600 dark:text-red-500 hover:underline">$47.960</a>
              </td>


              <td class="px-6 py-4">
                  <div class="flex items-center">
                      <div class="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>  Adeuda
                  </div>
              </td>
          </tr>
         
      </tbody>
  </table>
  </div>
</div>,
    },
    {
      title: 	<a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-800 dark:text-gray-400">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-5 h-5 fill-white">
 <path d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z"/>
</svg>
 <span className='text-gray-100'>Factura</span>
    </a>
    ,
      content:
       <div>

   
          <div className="bg-white p-4 rounded-lg shadow-lg px-12 w-full h-full">
            <div className="flex justify-between mb-4">
              <div>
                <h1 className="text-lg font-bold">Remito de venta</h1>
                <h1 className="text-lg font-bold">Fecha:</h1>
                <div className="p-2 bg-gray-100 rounded-lg">
                <input type="date" value="2022-12-31" className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:border-blue-500 focus:outline-none focus:shadow-outline-blue" />
</div>

              </div>
              <div>
                <img src="/logo scj.png" alt="Logo de la empresa" className="h-24 " />
              </div>
            </div>
            <div>
  <div className="flex justify-between mb-4">
    {cliente && cliente.attributes && (
      <div>
        <p className="font-bold font-serif uppercase">Cliente: {cliente.attributes.nombre}</p>
        <p>{cliente.attributes.contacto}</p>
        <p>{cliente.attributes.direccion}</p>
        <p>CABA, Argentina</p>
      </div>
    )}
  </div>
</div>

              <div>
                <p className="font-bold text-right ">Número de boleta:</p>
                <p className="font-bold text-right">{numeroFactura}</p>

              </div>
            </div>
{/* //Factura */}

{/* seleccionar proyecto */}
            <div>
      <select
        className="block appearance-none w-full bg-blue-50 border border-gray-200 text-gray-700 py-2 px-8 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        value={productoSeleccionado}
        onChange={(event) => setProductoSeleccionado(event.target.value)}
      >
        <option value="" >Seleccione un proyecto</option>
        {data.proyectos.map((proyecto) => (
          <option key={proyecto.id} value={proyecto.attributes.descripcion} >
            {proyecto.attributes.descripcion}
            {proyecto.attributes.horas}
          </option>
          
        ))}
      </select>
      {/* seleccionar presupuesto */}

      <select
        className="block appearance-none w-full bg-blue-100 border border-gray-200 text-gray-700 py-2 px-8 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        value={presupuestoSeleccionado}
        onChange={(event) => setPresupuestoSeleccionado(event.target.value)}
      >
        <option value="">Seleccione un presupuesto</option>
        {data.presupuestos.map((presupuesto) => (
          <option key={presupuesto.id} value={presupuesto.attributes.descripcion}>
            {presupuesto.attributes.descripcion}
            {presupuesto.attributes.horas}
          </option>
          
        ))}
      </select>

      <table className="w-full text-xl ">
        <thead className="bg-gray-500">
          <tr>
            <th className="py-2 px-8 text-left text-gray-100 ">Producto</th>
            <th className="py-2 text-center text-gray-100">Horas de trabajo/precio</th>
            <th className="py-2 text-center text-gray-100">materiales/iva</th>
            <th className="py-2 text-center text-gray-100">total</th>
          </tr>
        </thead>
        <tbody>
          {productosFiltrados.map((proyecto) => (
            <tr
              key={proyecto.id}
              className="bg-white p-6 rounded-lg shadow-lg w-full h-full"
            >
              <td className="py-2 px-8">{proyecto.attributes.descripcion}</td>
              <td className="py-2 text-center">{proyecto.attributes.horas}</td>
              <td className="py-2 text-center">{proyecto.attributes.materiales}</td>
              <td className="py-2 text-center">{proyecto.attributes.total}</td>
            </tr>
          ))}
                 {presupuestoFiltrados.map((presupuesto) => (
            <tr
              key={presupuesto.id}
              className="bg-white p-4 rounded-lg shadow-lg w-full h-full"
            >
              <td className="py-2 px-8 ">{presupuesto.attributes.descripcion}</td>
              <td className="py-2 text-center">{presupuesto.attributes.precio}</td>
              <td className="py-2 text-center">{presupuesto.attributes.iva}</td>
              <td className="py-2 text-center">{presupuesto.attributes.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  

 
      
   
 



  <button onClick={handleGenerarFactura} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Generar factura
    </button>

      </div>,
    },
  ];

  return (


    <div >
      <div className="w-full py max-w-screen-mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-800 dark:text-gray-100">
    <div
      style={{
        backgroundImage: "url('/clientes.jpg')",
        backgroundSize: 'cover',
        minHeight: '100vh', 
      }}
    >
   
    <Tabs tabs={tabs} onTabChange={handleTabChange} />
  
    
    </div>
    </div>
</div>

  );
    };



export default MyPage;