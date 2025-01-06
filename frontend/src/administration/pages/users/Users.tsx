import useAxios from '../../../general/hooks/useAxios/useAxios';
import { InputText } from 'primereact/inputtext';
import { Page } from '../../../general/styledComponents/Page';
import Table from '../../styledComponents/Table';
import BodyTable from '../../components/bodyTable/BodyTable';
import ItemsUser from './components/itemsUser/ItemsUser';
import Head from './components/head/Head';
import { useState, useEffect } from 'react';      
import { search } from '../../functions/search';
import NoProducts from '../../components/noProducts/NoProducts';

const Users: React.FC = () => {
  const { data } = useAxios<any[]>(`${import.meta.env.VITE_URL_BACKEND}/getUsers`);
  const [filteredData, setFilteredData] = useState(data);
  useEffect(() => { setFilteredData(data)}, [data]);
  const handleSearch = (value: string) => {
    const results = search(value, data || []); 
    setFilteredData(results);
  }

  return (
  <Page>
   <Table>
   <InputText 
        placeholder='Buscar usuario' 
        type='search' 
        onChange={(e) => handleSearch(e.target.value)}
        className='search' 
      />
    <Head />
    {filteredData?.length === 0 && <NoProducts />}
    <BodyTable data={filteredData} Item={ItemsUser}/>
   </Table>
  </Page>
  )
};

export default Users;