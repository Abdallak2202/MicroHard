import React, { useState } from 'react';

export default function Register() {
  const [input, setInput] = useState({
    username: '',
    email: '',
    password: '',
    role: '1'
  });

  // manejar cambios en el formulario
  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    console.log(input);
  }

  // manejar envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(input);

    try {
      const response = await fetch('http://localhost:1337/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(input)
      });

      if (!response) {
        throw new Error('HTTP error, status = ' + response.status);
      }

      const data = await response.json();
      console.log(data);
      alert('¡Usuario creado con exito!');
      setInput({
        username: '',
        password: '',
        email: '',
        role: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mx-auto flex min-h-screen w-full items-center justify-center bg-zinc-800 text-white">
      <section className="flex w-[30rem] flex-col space-y-10">
        <h2 className="text-center text-4xl font-medium">Registrate</h2>

        <form onSubmit={handleSubmit}>
          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-black">
            <label>
              Username:
              <input
                className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                type="text"
                name="username"
                value={input.username}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-black">
            <label>
              Email:
              <input
                className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                type="text"
                name="email"
                value={input.email}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-black">
            <label>
              Password:
              <input
                className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                type="password"
                name="password"
                value={input.password}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-black">
            <label>
              Role:
              <input
                className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                type="text"
                name="role"
                value={input.role}
                onChange={handleChange}
              />
            </label>
          </div>

          <button
            className="transform rounded-sm bg-zinc-600 py-2 font-bold duration-300 p-2 mt-4 hover:bg-zinc-700"
            type="submit"
          >
            Registrarse
          </button>
        </form>

        <p className="text-center text-lg">
          ¿Ya tenes tu cuenta? <br />
      <a
         href="http://localhost:3000/login"
        class="font-medium text-white underline-offset-4 hover:underline"
         >Inicia sesion</a>
      </p>
      </section>
      </div>
    );
  }