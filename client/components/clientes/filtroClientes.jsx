import { useState, useEffect } from 'react';

const Filter = ({ onChange }) => {
  const [customerNames, setCustomerNames] = useState([]);
  const [selectedName, setSelectedName] = useState("");

  const [selectedBudget, setSelectedBudget] = useState([]);

  useEffect(() => {
    const fetchCustomerNames = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        const customerNames = data.map((customer) => customer.name);
        setCustomerNames(customerNames);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCustomerNames();
  }, []);

  const handleNameChange = (event) => {
    const value = event.target.value;
    setSelectedName(value);
    onChange({ value, name: "name-select" });
  };
  //--------------------------------------
  
  useEffect(() => {
    const fetchBudgetNames = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/albums");
        const data = await response.json();
        const selectedBudget = data.map((budget) => budget.title);
        setSelectedBudget(selectedBudget);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBudgetNames();
  }, []);

  const handleBudgetChange = (event) => {
    const value = event.target.value;
    setSelectedBudget(value);
    onChange({ value, title: "budget-select" });
  };

  return (
    <div>
      <div class="pt-40 flex ml-auto">
        <div class="flex">
          <label htmlFor="name-select" class="text-5xl px-20 underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Seleccione:</label>
          <select id="name" onChange={handleNameChange} class="inline-flex items-center text-4xl text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            <option value="">Nombre del cliente</option>
            {Array.isArray(customerNames) && customerNames.map((name) => (
  <option key={name} value={name}>
    {name}
  </option>            ))}
          </select>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </div>
        <div class="flex">
          <label htmlFor="budget-select" class="py-4 text-5xl px-20 underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Seleccione:</label>
          <select id="budget" onChange={handleBudgetChange} class="text-4xl inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            <option value="">Presupuesto</option>
            {Array.isArray(selectedBudget) && selectedBudget.map((title) => (
  <option key={title} value={title}>
    {title}
  </option>           
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
