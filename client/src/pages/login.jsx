// import React, { useState, useEffect } from 'react';


// export default function Login() {

  
//     const [identifier, setIdentifier] = useState('');
//     const [password, setPassword] = useState('');
  
//     const handleUsernameChange = (event) => {
//       setIdentifier(event.target.value);
//     };
  
//     const handlePasswordChange = (event) => {
//       setPassword(event.target.value);
//     };
  

//     const handleSubmit = async (event) => {
//       event.preventDefault();
//       try {
//         const response = await fetch('http://localhost:1337/api/auth/local', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ identifier, password }),
//         });
//         const data = await response.json();
//         console.log(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };



//     return (
//       <div className='mx-auto flex min-h-screen w-full items-center justify-center bg-zinc-800 text-white'>

//       <section class="flex w-[30rem] flex-col space-y-10">
//         <h2 class="text-center text-4xl font-medium">Iniciar sesión</h2>
//         <form onSubmit={handleSubmit}>
//           <div  class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-black">
//           <label htmlFor="username">Usuario:</label>
//           <input  class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
//            type="text" id="username" name="username" value={identifier} onChange={handleUsernameChange} />
//           </div>

//           <div  class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-black">
//           <label htmlFor="password">Contraseña:</label>
//           <input 
//            class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
//           type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />
//           </div>


//            <p class="text-center text-lg">
//             <br />
//        No tenes una cuenta?
//        <a
//          href="http://localhost:3000/register"
//         class="font-medium text-zinc-300 underline-offset-4 hover:text-zinc-400 "
//          >  Creala!</a>
//      </p>

//           <button 
//           class="transform rounded-sm bg-zinc-600 py-2 font-bold duration-300 p-2  hover:bg-zinc-700"
//            type="submit">Iniciar sesión</button>
//         </form>
//         </section>
//       </div>
//     );
  
// }

{/* 
// <!-- page -->
// <main
//   class="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white"
// >
//   <!-- component -->
//   <section class="flex w-[30rem] flex-col space-y-10">
//     <div class="text-center text-4xl font-medium">Log In</div>

//     <div
//       class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
//     >
//       <input
//         type="text"
//         placeholder="Email or Username"
//         class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
//       />
//     </div>

//     <div
//       class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
//     >
//       <input
//         type="password"
//         placeholder="Password"
//         class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
//       />
//     </div>

//     <button
//       class="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400"
//     >
//       LOG IN
//     </button>

//     <p class="text-center text-lg">
//       No account?
//       <a
//         href="#"
//         class="font-medium text-indigo-500 underline-offset-4 hover:underline"
//         >Create One</a
//       >
//     </p>
//   </section>
// </main> */}




import React from 'react';
import auth0Client from '../../lib/auth0';

class Login extends React.Component {
  componentDidMount() {
    // If the user is already authenticated, redirect to the home page
    if (auth0Client.isAuthenticated()) {
      window.location.href = '/';
    }
  }

  render() {
    return (

      //       <div className='mx-auto flex min-h-screen w-full items-center justify-center bg-zinc-800 text-white'>

//       <section class="flex w-[30rem] flex-col space-y-10">
//         <h2 class="text-center text-4xl font-medium">Iniciar sesión</h2>
//         <form onSubmit={handleSubmit}>
//           <div  class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-black">
//           <label htmlFor="username">Usuario:</label>
//           <input  class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
//            type="text" id="username" name="username" value={identifier} onChange={handleUsernameChange} />
//           </div>

//           <div  class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-black">
//           <label htmlFor="password">Contraseña:</label>
//           <input 
//            class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
//           type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />
//           </div>


//            <p class="text-center text-lg">
//             <br />
//        No tenes una cuenta?
//        <a
//          href="http://localhost:3000/register"
//         class="font-medium text-zinc-300 underline-offset-4 hover:text-zinc-400 "
//          >  Creala!</a>
//      </p>

//           <button 
//           class="transform rounded-sm bg-zinc-600 py-2 font-bold duration-300 p-2  hover:bg-zinc-700"
//            type="submit">Iniciar sesión</button>
//         </form>
//         </section>
//       </div>

<div className='mx-auto flex min-h-screen w-full items-center justify-center bg-zinc-800 text-white'>
      <section class="flex w-[30rem] flex-col space-y-10 bg-zinc-600 border border-zinc-900 p-10 rounded-xl">
      <h2 class="text-center text-4xl font-medium">Iniciar sesión</h2>

        <p class="text-center text-lg">Please log in to continue:</p>
        <button class="transform rounded-sm bg-zinc-600 py-2 font-bold duration-300 p-2  hover:bg-zinc-700" onClick={auth0Client.login}>Log In</button>
        
      





        <p class="text-center text-lg">
            <br />
       No tenes una cuenta?
       <a
         href="http://localhost:3000/register"
        class="font-medium text-zinc-300 underline-offset-4 hover:text-zinc-400 "
         >  Creala!</a>
     </p> 
     </section>
     </div>
    );
  }
}

export default Login;