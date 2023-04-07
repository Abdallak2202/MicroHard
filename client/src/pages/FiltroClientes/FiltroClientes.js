import { useState, useEffect } from 'react';
import SearchBar from '/components/searchBar/searchBar';
import Table from '../../../components/clientes/filtroClientes';


function MyPage() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => setData(json));
    }, []);
  
    const handleSearch = (value) => {
      setSearchTerm(value);
    };
  
    return (
      <div>
        <SearchBar onSearch={handleSearch} />
        <Table data={data} searchTerm={searchTerm} />
       
      </div>
    );
  }
  
  export default MyPage;