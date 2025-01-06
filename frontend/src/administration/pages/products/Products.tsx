import Table from '../../styledComponents/Table';
import { Page } from '../../../general/styledComponents/Page';
import Body from '../../components/bodyTable/BodyTable';
import Head from './components/head/Head';
import { useProductsContext } from '../../../context/productsCotext/ProductsContext';
import ItemProduct from './components/itemProducts/ItemProduct';
import { search } from '../../functions/search';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import NoProducts from '../../components/noProducts/NoProducts';
import { useEffect } from 'react';



const Products = () => {
  const { data, loading, error } = useProductsContext();
  const [filteredData, setFilteredData] = useState<any[]>(data);
  useEffect(() => { setFilteredData(data)}, [data]);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleSearch = (value: string) => {
    const results = search(value, data); 
    setFilteredData(results); 
  };

  return (
    <Page>
      <Table>
        <InputText
        type='search'
        onChange={(e) => handleSearch(e.target.value)}
        className='search'
        placeholder='Buscar producto'
      />
        <Head />
        <Body data={filteredData} Item={ItemProduct} /> 
        {filteredData.length === 0 && <NoProducts />}
      </Table>
    </Page>
  );
};

export default Products;
