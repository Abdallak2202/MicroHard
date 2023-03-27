import React from 'react'
import { useRouter } from "next/router";
import Link from "next/link";
import {useEffect,useState } from "react";

export default function NavBar() {
    const router = useRouter();
    const [user, setuser] = useState('')



  const [showDropdown, setShowDropdown] = useState({
    clientState: false,
    proyectState: false,
    presupuestState: false,
    userState: false,

  });

  const handleShowDropdown = ({ target }) => {
    console.log(target)
    const { name } = target;
   
    setShowDropdown({
        clientState:
        name === "clientState"
          ? !showDropdown.clientState
          : (showDropdown.clientState = false),
          proyectState:
        name === "proyectState"
          ? !showDropdown.proyectState
          : (showDropdown.proyectState = false),
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
        proyectState: false,
        presupuestState: false,
        userState: false,
      });
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);


  

  return (
    <div className=' fixed top-0 w-full bg-transparent z-50'>

    <nav className=' flex pl-20 pr-20 text-white items-center gap-14 p-5 w-full z-40  '>

    <Link className=" scale-100" href="/">
        <div className=' flex text-xl items-center '>

           <h1>Logo</h1>

        </div>

    </Link>

        <div className=' pl-96 '>

        <Link href="/clients" >
            <button 
            class="border-b-2 border-transparent hover:text-gray-200  hover:border-blue-500 " 
            name="clientState"
            onClick={handleShowDropdown}>

                Clientes
            </button> 

            </Link>
          

        </div>

        <div className='pl-8 '>

        <Link href="/projects" >
            <button class="border-b-2 border-transparent hover:text-gray-200  hover:border-blue-500 ">
                Proyectos
            </button>
        </Link>

        </div>

        <div className='pl-8 ' >

        <Link href="/budgets" >
            <button class="border-b-2 border-transparent hover:text-gray-200  hover:border-blue-500 ">
                Presupuestos
            </button>
        </Link>

        </div>

        <div className='flex  items-start pl-40'>
            <div>
                <button  name="userState"
          onClick={handleShowDropdown} >

              {user?user:"SignIn"}

          {/* <svg xmlns="http://www.w3.org/2000/svg" 
          class="h-8 w-8 hover:text-gray-200" fill="none" 
          viewBox="0 0 24 24" stroke="currentColor" 
         
            >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg> */}

              </button>

              {showDropdown.userState && (
            <div>
            <div  class=" shadow-sm bg-sky-400/20">
                <div className=" grid-cols-12 max-w-screen-xl px-4 py-3 mx-auto  md:px-6">
                 
             <div className=' cursor-pointer'>
                {user&& <a  onClick={handleSignout}>
                    Sign out
                  </a>}
                  {!user&& <a onClick={handleSignIn}>
                    Sign In
                  </a>}
                  </div>
                  </div>
                  <div >
                  </div>
              

                </div>
         
              </div>
        
            )}


            </div>


        </div>

        </nav>

    </div>
  )
}
