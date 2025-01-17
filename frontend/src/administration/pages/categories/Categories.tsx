import Table from '../../styledComponents/Table'
import { Page } from '../../../general/styledComponents/Page'
import Head from './components/head/Head'
import BodyTable from '../../components/bodyTable/BodyTable';
import ItemCategories from './components/item/ItemCategories';
import { useState } from 'react';
import { search } from '../../functions/search';
import { InputText } from 'primereact/inputtext';
import { useEffect } from 'react';
import NoProducts from '../../components/noProducts/NoProducts';
import { useCategories } from '../../../context/categoryContext/categoryContext';

const Categories = () => {
  const { data, loading, error } = useCategories();
    const [filteredData, setFilteredData] = useState(data);
    useEffect(() => { setFilteredData(data)}, [data]);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
  
    const handleSearch = (value: string) => {
      if (data) {
        const results = search(value, data); 
        setFilteredData(results); 
      }
    };
  
    return (
      <Page>
        <Table>
          <InputText 
            placeholder='Buscar categoría' 
            type='search' 
            onChange={(e) => handleSearch(e.target.value)}
            className='search' 
          />
          <Head />
          {filteredData?.length === 0 && <NoProducts />}
          <BodyTable data={filteredData} Item={ItemCategories} lenght={3}/>
        </Table>
      </Page>
    )  
};

export default Categories;