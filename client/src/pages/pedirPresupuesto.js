import React from 'react'

export default function pedirPresupuesto () {

    return (
        <div class="lg:bg-form-graffiti bg-cover mt-20 overflow-hidden bg-no-repeat bg-center bg-home-responsive min-h-screen w-full">
            <h1 class="text-xl font-extrabold sm:text-5xl  mx-auto text-center mt-10 text-white">Consulta por tu presupuesto</h1>
        
          <div class="bg-white p-5 mt-20 rounded-xl mx-auto w-full max-w-[550px] border-slate-600">
            <form action="https://formsubmit.co/spombo@microhardcomputers.com.ar" method="POST">
              <div class="mb-5">
                <label
                  for="name"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Nombre completo
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div class="mb-5">
                <label
                  for="email"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@domain.com"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
        
              <div class="mb-5">
                <label
                  for="message"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Especificar el servicio que se requiere:
                </label>
                <textarea
                  rows="4"
                  name="message"
                  id="message"
                  placeholder="Type your message"
                  class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>
              </div>

              {/* <div>
                <button
                  type="submit"
                  class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                >
                  Submit
                </button>
              </div> */}

              <div className="text-4xl text-center bg-zinc-600 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
type="submit" >
      <button type="submit">Send proposal</button>
      </div>
            </form>
          </div>
        </div>
    )
}