import { useState, useEffect } from 'react';
import Filter from '/components/clientes/filtroClientes';


export default function FilterableList() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({service: null, price: null})

  const handleFilter = () => {
    let filteredData = data;
    if (selectedOptions.price !== null) {
      console.log(selectedOptions.price);
      filteredData = filteredData.filter((obj) => obj.price < selectedOptions.price);
    }
    if (selectedOptions.service !== null) {
      console.log(selectedOptions.service);
      filteredData = filteredData.filter(
        (item) => item.service.toString() === selectedOptions.service
      );
    }
    return filteredData;
  };
  

  useEffect(() => {
    const fetchData = async () => {
      const [endpoint1, endpoint2, endpoint3] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()),
        fetch("https://jsonplaceholder.typicode.com/albums").then((res) => res.json()),
        fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json()),
      ]);
      const newData = [...endpoint1, ...endpoint2, ...endpoint3];
      setData(newData);
      setFilteredData(newData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filteredData = handleFilter();
    setFilteredData(filteredData);
  }, [data, selectedOptions]);
  

  const handlerOnChange = ({ name, value }) => {
    if (!name) {
      console.error('Invalid name');
      return;
    }
    const nameParts = name.split('-');
    setSelectedOptions(prevSelectedOptions => ({...prevSelectedOptions, [nameParts[0]]: value}))
  };
  
  return (
  <div>
    <Filter data={data} onChange={handlerOnChange} />

    {filteredData.length === 0 && (
      <p class="text-5xl px-20 underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">No hay resultados en esa búsqueda</p>
    )}

    {filteredData.length > 0 &&
      filteredData.map((item, index) => (
        <div key={index}>
          <div class="pt-40 relative overflow-x-auto shadow-md sm:rounded-lg">
            <div class="flex items-center justify-between pb-4">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-center">
                      Cliente
                    </th>
                    <th scope="col" class="px-6 py-3 text-center">
                      Presupuesto
                    </th>
                    <th scope="col" class="px-6 py-3 text-center">
                      Proyecto
                    </th>
                    <th scope="col" class="px-6 py-3 text-center">
                      Detalle Cliente
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="text-lg text-center leading-relaxed bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="px-6 py-4 text-center sfont-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.name}
                    </th>
                    <td class="px-8 py-20 text-center">
                      {item.username}
                    </td>
                    <td class="px-8 py-20 text-center">
                      {item.email}
                    </td>
                    <td class="px-8 py-20 text-center ">
                      {item.title}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))
    }
    {/* {filteredData.length === 0 && (
      <p>No se encontró ningún servicio para esta búsqueda</p>
    )} */}
  </div>
);
    }