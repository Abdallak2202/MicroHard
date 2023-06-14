import React from 'react'
import { useRouter } from "next/router";
import Link from "next/link";
import {useEffect,useState } from "react";

export default function NavBar() {
    const router = useRouter();
    const [user, setuser] = useState('')



  const [showDropdown, setShowDropdown] = useState({
    clientState: false,
    estimateState: false,
    presupuestState: false,
    filtroClienteState:false,
    recurringState:false,
    crearRecurenteState:false,
    enlazarRecurenteState:false,
    itemsteState:false,
    userState: false,
    listItemState:false,


  });

  const handleShowDropdown = ({ target }) => {
    console.log(target)
    const { name } = target;
   
    setShowDropdown({
        clientState:
        name === "clientState"
          ? !showDropdown.clientState
          : (showDropdown.clientState = false),
      estimateState:
        name === "proyectState"
          ? !showDropdown.estimateState
          : (showDropdown.estimateState = false),
       presupuestState:
          name === "presupuestState"
            ? !showDropdown.presupuestState
            : (showDropdown.presupuestState = false),
        userState:
            name === "userState"
              ? !showDropdown.userState
              : (showDropdown.userState = false),
        filtradoState:
              name === "filtradoState"
                ? !showDropdown.userState
                : (showDropdown.userState = false),
        filtroClienteState:
                name === "filtroClienteState"
                  ? !showDropdown.userState
                  : (showDropdown.userState = false),
        recurringState:
                  name === "recurringState"
                    ? !showDropdown.userState
                    : (showDropdown.userState = false),
        crearRecurenteState:
                    name === "crearRecurenteState"
                      ? !showDropdown.userState
                      : (showDropdown.userState = false),
        enlazarRecurenteState:
                      name === "enlazarRecurenteState"
                        ? !showDropdown.userState
                        : (showDropdown.userState = false),
        itemsteState:
                      name === "itemsteState"
                        ? !showDropdown.userState
                        : (showDropdown.userState = false),
        listItemState:
                      name === "listItemState"
                        ? !showDropdown.userState
                        : (showDropdown.userState = false),
      
    });
  };


  const handleSignIn = (e) => {
    e.preventDefault();
     router.push("/login");
    };

  //--------------Para que no quede desplegado el menú cuando cambiamos de pagina---------------
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsNavOpen(false);
      setShowDropdown({
        clientState: false,
        estimateState: false,
        presupuestState: false,
        filtroClienteState: false,
        filtroClienteState: false,
        recurringState: false,
        crearRecurenteState: false,
        enlazarRecurenteState: false,
        itemsteState: false,
        listItemState: false
      });
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

/*prueba*/
  

  return (
     <div className=' bg-zinc-800 w-full ml-0'> 

    <div className="max-w-2xl">
    
    <nav className="border-gray-200 top-0 w-full bg-transparent z-50 "> 
 
    <div className="container mx-auto flex pl-12 pr-20 items-center gap-14 p-3 w-full z-40  ">

        <Link className=" scale-100 pr-40  " href="/">

        <div className=' flex items-center space-x-1'>
        <img src="logo scj.png" alt="Logo" height={100} width={100} />
            <span className="   text-sm text-white font-semibold whitespace-nowrap  ">Electronic Solutions</span>
        </div>

            </Link>


        
        <div className="hidden md:block w-full md:w-auto" id="menu">
          
        <ul className="flex-col md:flex-row flex md:space-x-10 mt-4 md:mt-0 md:text-sm md:font-medium">
            
            <li className='pl-48'>
                <button id="clienteslist" data-dropdown-toggle="dropdownNavbar" className="text-white hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-500 md:p-0 font-medium flex items-center justify-between w-full md:w-auto">Clientes <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>

                {/* Dropdown menu */}

                <div id="dropdownNavbar" className="hidden bg-zinc-400 text-base z-10 list-none divide-y divide-gray-300 rounded shadow my-4 w-44">
                    <ul className="py-1" aria-labelledby="dropdownLargeButton">
                    <li>
                        <a href="/FiltroClientes" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Clientes</a>
                    </li>
                    <li>
                        <a href="/clients" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Crear Cliente</a>
                    </li>
                    <li>
                        <a href="/abono" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Abono</a>
                    </li>
                    </ul>
                </div>
            </li>
            <li>

            <a href="/estimates" className="text-white hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-500 md:p-0">Estimacion</a>
            </li>
            <li>
            <a href="/budgets" className="text-white hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-500 md:p-0">Presupuestos</a>
            </li>
            <li>
            <a href="/recurring" className="text-white hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-500 md:p-0">Servicios</a>
            </li>

            <li className='pl-30'>
                <button id="Itemslist" data-dropdown-toggle="dropdownNavbar2" className="text-white hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-500 md:p-0 font-medium flex items-center justify-between w-full md:w-auto">Items <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>

                {/* Dropdown menu */}

                <div id="dropdownNavbar2" className="hidden bg-zinc-400 text-base z-10 list-none divide-y divide-gray-300 rounded shadow my-4 w-44">
                    <ul className="py-1" aria-labelledby="dropdownLargeButton">
                    <li>
                        <a href="/items" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Items</a>
                    </li>
                    <li>
                        <a href="/getItems" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Lista Items</a>
                    </li>
                    </ul>
                </div>
            </li>

            <li className=' pl-80'>
                <button id="SignIn" data-dropdown-toggle="dropdownSignIn" className="text-white hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-500 md:p-0 font-medium flex items-center justify-between w-full md:w-auto">SignIn<svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>

                {/* Dropdown menu */}

                <div id="dropdownSignIn" className="hidden bg-zinc-400 text-base z-10 list-none divide-y divide-gray-300 rounded shadow my-4 w-44">
                    <ul className="py-1" aria-labelledby="dropdownLargeButton">
                    <li>
                        <a href="/login" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Sign In</a>
                    </li>
                    <li>
                        <a href="/" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Sign out</a>
                    </li>
                    </ul>
                </div>
            </li>

        </ul>
        </div>
    </div>
    </nav>

</div>
<script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script>
</div>

  )
}