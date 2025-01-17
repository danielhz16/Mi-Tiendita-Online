import useAxios from '../../../general/hooks/useAxios/useAxios';
import { Page } from '../../../general/styledComponents/Page';
import Table from '../../styledComponents/Table';
import BodyTable from '../../components/bodyTable/BodyTable';
import ItemsUser from './components/itemsUser/ItemsUser';
import Head from './components/head/Head';


const Users: React.FC = () => {
  const { data } = useAxios<any[]>(`${import.meta.env.VITE_URL_BACKEND}/getUsers`);

  return (
  <Page>
   <Table>
    <Head />
    <BodyTable data={data || []} Item={ItemsUser} lenght={7}/>
   </Table>
  </Page>
  )
};

export default Users;