import React from 'react'
import { useState, useEffect } from 'react';
import SearchBar from '../../components/searchBar/searchBar';
import Table from '../../components/clientes/filtroClientes';


function FiltroCliente() {
    const [data, setData] = useState([]);
    
    const [searchTerm, setSearchTerm] = useState('');
  
    useEffect(() => {
      fetch('http://localhost:1337/api/clientes?populate=*')
        .then((response) => response.json())
        .then((json) => setData(json));
    }, []);
  
    const handleSearch = (value) => {
      setSearchTerm(value);
    };
  console.log()
    return (
      <div>
        <SearchBar onSearch={handleSearch} />
        <Table data={data} searchTerm={searchTerm } />
       
       
      </div>
    );
  }
  
  export default FiltroCliente;